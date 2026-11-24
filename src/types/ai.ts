export interface ExtractionProposal {
  kind: 'lab' | 'imaging' | 'medication';
  extractedFields: Record<string, string | number | boolean | undefined>;
  warningsFr: string[];
  rawModelNote?: string;
}

export interface WikiQaResponse {
  answerFr: string;
  citedArticles: { slug: string; titleFr: string }[];
  disclaimerFr: string;
}

export interface AiProviderAdapter {
  extractFromTextOrFile(input: { text?: string; fileBase64?: string; mimeType?: string }): Promise<ExtractionProposal>;
  answerFromWikiContext(questionFr: string, contextSnippets: { slug: string; titleFr: string; excerptFr: string }[]): Promise<WikiQaResponse>;
}
