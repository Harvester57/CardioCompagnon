import { describe, expect, it, vi } from 'vitest';
import type { AppSettings, WikiArticle } from '../../types';
import {
  AI_EXTRACTION_WARNING_FR,
  AI_MEDICAL_DISCLAIMER_FR,
  AiServiceError,
  EXTRACTION_SYSTEM_PROMPT_FR,
  WIKI_QA_SYSTEM_PROMPT_FR,
  createAiAdapter,
} from '../ai/adapter';
import { extractReportWithAi } from '../ai/extract-report';
import { DEFAULT_GEMINI_MODEL } from '../ai/gemini.adapter';
import { askWikiWithAi, selectRelevantWikiSnippets } from '../ai/wiki-qa';

function createMockResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

const SAMPLE_ARTICLES: WikiArticle[] = [
  {
    slug: 'regles-conduite-automobile',
    sourceWikiPath: 'wiki/references/driving-rules.md',
    titleFr: 'Regles de conduite automobile en France',
    category: 'france',
    readingTier: 'essential',
    asOf: '2026-11-24',
    confidence: 'high',
    volatility: 'warm',
    tags: ['permis', 'conduite', 'dai', 'lifevest', 'arrete 2022'],
    aliases: ['permis de conduire', 'defibrillateur conduite'],
    linkedModules: ['device', 'lifeVest'],
    plainSummaryFr:
      'L Arrete du 28 mars 2022 encadre la conduite en France apres implantation de DAI, choc ou port de gilet LifeVest.',
    sections: [
      {
        headingFr: 'Conduite et defibrillateur implantable (DAI)',
        bodyMarkdownFr:
          'En groupe 1 (vehicule leger), un delai minimal de 4 semaines s applique apres implantation de DAI en prevention primaire et d au moins 12 semaines en prevention secondaire.',
      },
      {
        headingFr: 'Gilet LifeVest',
        bodyMarkdownFr:
          'La conduite est interdite pendant toute la duree de l indication du gilet defibrillateur portable LifeVest.',
      },
    ],
    relatedArticleSlugs: [],
    sources: [{ label: 'Arrete du 28 mars 2022', detail: 'Legifrance' }],
    disclaimerType: 'legal_france',
  },
  {
    slug: 'bilan-biologique-et-biomargueurs',
    sourceWikiPath: 'wiki/concepts/biomarkers.md',
    titleFr: 'Biologie cardiaque : NT-proBNP, potassium et fonction renale',
    category: 'diagnostic',
    readingTier: 'essential',
    asOf: '2026-11-24',
    confidence: 'high',
    volatility: 'stable',
    tags: ['nt-probnp', 'bnp', 'potassium', 'creatinine', 'arni'],
    aliases: ['prise de sang', 'hyperkaliemie'],
    linkedModules: ['core', 'ckd'],
    plainSummaryFr:
      'Sous sacubitril/valsartan (Entresto), le NT-proBNP reste interpretable tandis que le BNP peut augmenter artificiellement.',
    sections: [
      {
        headingFr: 'NT-proBNP versus BNP sous ARNI',
        bodyMarkdownFr:
          'Le sacubitril inhibe la neprilysine qui degrade le BNP. Les recommandations ESC 2026 privilegient le NT-proBNP pour le suivi sous ARNI.',
      },
    ],
    relatedArticleSlugs: [],
    sources: [{ label: 'ESC 2026', detail: 'Recommandations insuffisance cardiaque' }],
    disclaimerType: 'medical',
  },
  {
    slug: 'nutrition-et-sel',
    sourceWikiPath: 'wiki/topics/nutrition.md',
    titleFr: 'Alimentation, sel et apports hydriques',
    category: 'nutrition',
    readingTier: 'essential',
    asOf: '2026-11-24',
    confidence: 'high',
    volatility: 'warm',
    tags: ['sel', 'sodium', 'hydratation', 'fresh-up'],
    aliases: ['regime sans sel', 'boire de l eau'],
    linkedModules: ['core'],
    plainSummaryFr:
      'Un repere raisonnable autour de 5 g de sel par jour et une hydratation guidee par la soif (FRESH-UP) sont discutes avec l equipe soignante.',
    sections: [
      {
        headingFr: 'Substituts de sel au potassium',
        bodyMarkdownFr:
          'Les sels de regime riches en chlorure de potassium exposent a une hyperkaliemie sous IEC, ARA2, ARNI ou ARM.',
      },
    ],
    relatedArticleSlugs: [],
    sources: [{ label: 'FRESH-UP 2025', detail: 'Nature Medicine' }],
    disclaimerType: 'medical',
  },
];

describe('AI services (garde-fous, adaptateurs Gemini/OpenAI/Ollama, extraction et Q&A wiki)', () => {
  it('refuse tout appel lorsque l assistant IA est desactive (enabled = false)', async () => {
    const disabledConfig: AppSettings['aiHelper'] = {
      enabled: false,
      provider: 'gemini',
      apiKey: 'fake-key',
    };
    const fetchSpy = vi.fn();

    expect(() => createAiAdapter(disabledConfig, fetchSpy as unknown as typeof fetch)).toThrow(
      AiServiceError,
    );
    await expect(
      extractReportWithAi(disabledConfig, { text: 'LDL: 0,55 g/L' }, fetchSpy as unknown as typeof fetch),
    ).rejects.toMatchObject({ code: 'AI_DISABLED' });
    await expect(
      askWikiWithAi(disabledConfig, 'Puis-je conduire avec un DAI ?', SAMPLE_ARTICLES, {
        fetchImpl: fetchSpy as unknown as typeof fetch,
      }),
    ).rejects.toMatchObject({ code: 'AI_DISABLED' });

    expect(fetchSpy).not.toHaveBeenCalled();
  });

  it('inclut des garde-fous stricts en francais dans les prompts systeme', () => {
    expect(EXTRACTION_SYSTEM_PROMPT_FR).toMatch(/AUCUN diagnostic/i);
    expect(EXTRACTION_SYSTEM_PROMPT_FR).toMatch(/JSON/i);
    expect(WIKI_QA_SYSTEM_PROMPT_FR).toMatch(/EXCLUSIVEMENT sur les extraits/i);
    expect(WIKI_QA_SYSTEM_PROMPT_FR).toMatch(/slug/i);
  });

  it('appelle l adaptateur Gemini avec texte + inlineData base64 PDF et normalise la proposition', async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      createMockResponse({
        candidates: [
          {
            content: {
              parts: [
                {
                  text: '```json\n{"kind":"lab","extractedFields":{"date":"2026-11-20","ldlGL":"0,52","potassiumMmolL":"4,6","ntProBnpPgMl":410},"warningsFr":["Unite LDL verifiee en g/L."],"rawModelNote":"Bilan extrait."}\n```',
                },
              ],
            },
          },
        ],
      }),
    );

    const config: AppSettings['aiHelper'] = {
      enabled: true,
      provider: 'gemini',
      apiKey: 'gemini-test-key',
      modelName: 'gemini-2.5-flash',
    };

    const proposal = await extractReportWithAi(
      config,
      {
        text: 'Compte-rendu biologique du 20/11/2026',
        fileBase64: 'data:application/pdf;base64,JVBERi0xLjQ=',
        mimeType: 'application/pdf',
      },
      fetchMock as unknown as typeof fetch,
    );

    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [calledUrl, calledInit] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(calledUrl).toContain('models/gemini-2.5-flash:generateContent');
    expect((calledInit.headers as Record<string, string>)['x-goog-api-key']).toBe(
      'gemini-test-key',
    );

    const parsedBody = JSON.parse(String(calledInit.body));
    expect(parsedBody.contents[0].parts).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          inlineData: {
            mimeType: 'application/pdf',
            data: 'JVBERi0xLjQ=',
          },
        }),
      ]),
    );

    expect(proposal.kind).toBe('lab');
    expect(proposal.extractedFields.ldlGL).toBe(0.52);
    expect(proposal.extractedFields.potassiumMmolL).toBe(4.6);
    expect(proposal.extractedFields.ntProBnpPgMl).toBe(410);
    expect(proposal.warningsFr).toContain(AI_EXTRACTION_WARNING_FR);
    expect(proposal.warningsFr).toContain('Unite LDL verifiee en g/L.');
  });

  it('appelle l adaptateur OpenAI-compat / Mistral sur /chat/completions avec Bearer token', async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      createMockResponse({
        choices: [
          {
            message: {
              content: JSON.stringify({
                kind: 'imaging',
                extractedFields: {
                  date: '2026-10-15',
                  modality: 'irm',
                  lvefPercent: '34',
                  lgeScarPresent: true,
                },
                warningsFr: [],
              }),
            },
          },
        ],
      }),
    );

    const config: AppSettings['aiHelper'] = {
      enabled: true,
      provider: 'mistral',
      apiKey: 'mistral-test-key',
    };

    const proposal = await extractReportWithAi(
      config,
      { text: 'IRM cardiaque : FEVG 34 %, cicatrice LGE presente.' },
      fetchMock as unknown as typeof fetch,
    );

    const [calledUrl, calledInit] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(calledUrl).toBe('https://api.mistral.ai/v1/chat/completions');
    expect((calledInit.headers as Record<string, string>).Authorization).toBe(
      'Bearer mistral-test-key',
    );
    expect(proposal.kind).toBe('imaging');
    expect(proposal.extractedFields.modality).toBe('irm');
    expect(proposal.extractedFields.lvefPercent).toBe(34);
    expect(proposal.extractedFields.lgeScarPresent).toBe(true);
    expect(proposal.warningsFr[0]).toBe(AI_EXTRACTION_WARNING_FR);
  });

  it('rejette un PDF brut sans texte sur OpenAI-compat avec UNSUPPORTED_FILE', async () => {
    const fetchMock = vi.fn();
    const config: AppSettings['aiHelper'] = {
      enabled: true,
      provider: 'openai_compatible',
      endpointUrl: 'http://localhost:1234/v1',
    };

    await expect(
      extractReportWithAi(
        config,
        { fileBase64: 'JVBERi0xLjQ=', mimeType: 'application/pdf' },
        fetchMock as unknown as typeof fetch,
      ),
    ).rejects.toMatchObject({ code: 'UNSUPPORTED_FILE' });
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('appelle l adaptateur local Ollama sur /api/chat sans cle API requise', async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      createMockResponse({
        message: {
          content: JSON.stringify({
            kind: 'medication',
            extractedFields: {
              pillar: 'raas_arni',
              innName: 'sacubitril/valsartan',
              frenchBrand: 'Entresto',
              doseLabel: '49/51 mg x 2/j',
            },
            warningsFr: ['Verifier la posologie exacte sur l ordonnance.'],
          }),
        },
      }),
    );

    const config: AppSettings['aiHelper'] = {
      enabled: true,
      provider: 'ollama',
      endpointUrl: 'http://localhost:11434',
      modelName: 'mistral',
    };

    const proposal = await extractReportWithAi(
      config,
      { text: 'Ordonnance : Entresto 49/51 mg matin et soir' },
      fetchMock as unknown as typeof fetch,
    );

    const [calledUrl, calledInit] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(calledUrl).toBe('http://localhost:11434/api/chat');
    const body = JSON.parse(String(calledInit.body));
    expect(body.stream).toBe(false);
    expect(body.format).toBe('json');
    expect(proposal.kind).toBe('medication');
    expect(proposal.extractedFields.innName).toBe('sacubitril/valsartan');
  });

  it('selectionne les extraits wiki pertinents par TF-IDF sans sensibilite aux accents', () => {
    const snippets = selectRelevantWikiSnippets(
      'Quelles sont les règles de conduite automobile avec un défibrillateur DAI ou une LifeVest ?',
      SAMPLE_ARTICLES,
      2,
    );

    expect(snippets.length).toBeGreaterThan(0);
    expect(snippets[0].slug).toBe('regles-conduite-automobile');
    expect(snippets[0].score).toBeGreaterThan(0);
    expect(snippets[0].excerptFr).toContain('Arrete du 28 mars 2022');
  });

  it('borne strictement les citations de askWikiWithAi aux articles fournis et inclut disclaimerFr', async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      createMockResponse({
        candidates: [
          {
            content: {
              parts: [
                {
                  text: JSON.stringify({
                    answerFr:
                      'Sous sacubitril/valsartan (Entresto), le dosage du NT-proBNP est privilegie par rapport au BNP.',
                    citedSlugs: [
                      'bilan-biologique-et-biomargueurs',
                      'article-hallucine-inexistant',
                    ],
                  }),
                },
              ],
            },
          },
        ],
      }),
    );

    const config: AppSettings['aiHelper'] = {
      enabled: true,
      provider: 'gemini',
      apiKey: 'gemini-test-key',
    };

    const response = await askWikiWithAi(
      config,
      'Pourquoi preferer le NT-proBNP au BNP sous Entresto ARNI ?',
      SAMPLE_ARTICLES,
      { fetchImpl: fetchMock as unknown as typeof fetch },
    );

    expect(DEFAULT_GEMINI_MODEL).toBe('gemini-4-hydrogen');
    const [calledUrl] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(calledUrl).toContain('models/gemini-4-hydrogen:generateContent');

    expect(response.answerFr).toContain('NT-proBNP');
    expect(response.citedArticles).toEqual([
      {
        slug: 'bilan-biologique-et-biomargueurs',
        titleFr: 'Biologie cardiaque : NT-proBNP, potassium et fonction renale',
      },
    ]);
    expect(response.disclaimerFr).toBe(AI_MEDICAL_DISCLAIMER_FR);
  });

  it('retourne une reponse ancree sans appel reseau si aucun article ne correspond a la question', async () => {
    const fetchMock = vi.fn();
    const config: AppSettings['aiHelper'] = {
      enabled: true,
      provider: 'ollama',
    };

    const response = await askWikiWithAi(
      config,
      'astrophysique quantique exoplanete',
      SAMPLE_ARTICLES,
      { fetchImpl: fetchMock as unknown as typeof fetch },
    );

    expect(fetchMock).not.toHaveBeenCalled();
    expect(response.citedArticles).toEqual([]);
    expect(response.answerFr).toMatch(/Aucun article correspondant/i);
    expect(response.disclaimerFr).toBe(AI_MEDICAL_DISCLAIMER_FR);
  });
});
