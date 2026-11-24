import { useMemo, useState } from 'react';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { HeartPulse, Scale, TrendingUp } from 'lucide-react';
import type { DailyLog } from '../../types';
import { formatFrenchNumber, formatWeightKgFr } from '../../engine';
import { Card } from '../../ui';
import {
  TREND_PERIODS,
  buildTrendSeries,
  formatFullDateFr,
  type TrendPeriodDays,
} from './today-utils';

export interface TrendsChartsProps {
  dailyLogs: readonly DailyLog[];
  referenceDate: string;
  dryWeightKg?: number;
}

export function TrendsCharts({ dailyLogs, referenceDate, dryWeightKg }: TrendsChartsProps) {
  const [periodDays, setPeriodDays] = useState<TrendPeriodDays>(30);

  const summary = useMemo(
    () => buildTrendSeries(dailyLogs, referenceDate, periodDays),
    [dailyLogs, referenceDate, periodDays],
  );

  const weightPoints = useMemo(
    () => summary.points.filter((point) => typeof point.weightKg === 'number'),
    [summary.points],
  );

  const bpHrPoints = useMemo(
    () =>
      summary.points.filter(
        (point) =>
          typeof point.systolicBp === 'number' ||
          typeof point.diastolicBp === 'number' ||
          typeof point.heartRateBpm === 'number',
      ),
    [summary.points],
  );

  return (
    <Card
      title="Tendances et courbes"
      subtitle={`Évolution sur les ${periodDays} derniers jours (jusqu'au ${formatFullDateFr(referenceDate)}).`}
      icon={<TrendingUp className="h-5 w-5" />}
      headerAction={
        <div
          role="group"
          aria-label="Période des graphiques"
          className="inline-flex rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-subtle)] p-1"
        >
          {TREND_PERIODS.map((days) => {
            const active = periodDays === days;
            return (
              <button
                key={days}
                type="button"
                aria-pressed={active}
                onClick={() => setPeriodDays(days)}
                className={`touch-target rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors tabular-nums ${
                  active
                    ? 'bg-[var(--color-primary)] text-white'
                    : 'text-[var(--text-primary)] hover:bg-[var(--bg-card)]'
                }`}
              >
                {days} j
              </button>
            );
          })}
        </div>
      }
    >
      <div className="space-y-6">
        <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-subtle)] p-4">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
            <h3 className="flex items-center gap-2 text-sm font-semibold text-[var(--text-primary)]">
              <Scale className="h-4 w-4 text-[var(--color-primary)]" aria-hidden="true" />
              <span>Courbe du poids (kg)</span>
            </h3>
            <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--text-secondary)] tabular-nums">
              {typeof dryWeightKg === 'number' && (
                <span>Poids sec : {formatWeightKgFr(dryWeightKg)}</span>
              )}
              <span>
                {summary.weightCount}{' '}
                {summary.weightCount > 1 ? 'pesées' : 'pesée'} sur {periodDays} j
              </span>
              {summary.minWeightKg !== undefined && summary.maxWeightKg !== undefined && (
                <span>
                  Min {formatWeightKgFr(summary.minWeightKg)} / Max{' '}
                  {formatWeightKgFr(summary.maxWeightKg)}
                </span>
              )}
            </div>
          </div>

          {weightPoints.length === 0 ? (
            <div className="rounded-xl border border-dashed border-[var(--border-strong)] bg-[var(--bg-card)] p-6 text-center text-sm text-[var(--text-secondary)]">
              Aucune pesée enregistrée sur les {periodDays} derniers jours. Enregistrez votre poids
              matinal ci-dessus pour faire apparaître la courbe.
            </div>
          ) : (
            <div
              className="w-full rounded-xl bg-[var(--bg-card)] p-2"
              role="img"
              aria-label={`Courbe du poids sur ${periodDays} jours : ${summary.weightCount} ${summary.weightCount > 1 ? 'pesées' : 'pesée'}`}
            >
              <ResponsiveContainer
                width="100%"
                height={224}
                minWidth={0}
                initialDimension={{ width: 640, height: 224 }}
              >
                <LineChart data={weightPoints} margin={{ top: 12, right: 16, left: 4, bottom: 4 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border-subtle)" />
                  <XAxis
                    dataKey="label"
                    tick={{ fontSize: 12, fill: 'var(--text-secondary)' }}
                    stroke="var(--border-strong)"
                  />
                  <YAxis
                    domain={['dataMin - 1', 'dataMax + 1']}
                    tickFormatter={(value: number) => formatFrenchNumber(value, 1)}
                    tick={{ fontSize: 12, fill: 'var(--text-secondary)' }}
                    stroke="var(--border-strong)"
                    width={48}
                  />
                  <Tooltip
                    formatter={(value) => [
                      typeof value === 'number' ? formatWeightKgFr(value) : String(value ?? ''),
                      'Poids',
                    ]}
                    labelFormatter={(_label, payload) => {
                      const rawDate = payload?.[0]?.payload?.date;
                      return typeof rawDate === 'string' ? formatFullDateFr(rawDate) : '';
                    }}
                    contentStyle={{
                      backgroundColor: 'var(--bg-card)',
                      borderColor: 'var(--border-subtle)',
                      borderRadius: '0.75rem',
                      color: 'var(--text-primary)',
                    }}
                  />
                  {typeof dryWeightKg === 'number' && (
                    <ReferenceLine
                      y={dryWeightKg}
                      stroke="var(--color-accent)"
                      strokeDasharray="6 4"
                      label={{
                        value: `Poids sec (${formatWeightKgFr(dryWeightKg)})`,
                        position: 'insideTopRight',
                        fill: 'var(--color-accent)',
                        fontSize: 11,
                      }}
                    />
                  )}
                  <Line
                    type="monotone"
                    dataKey="weightKg"
                    name="Poids (kg)"
                    stroke="var(--color-primary)"
                    strokeWidth={2.5}
                    dot={{ r: 3.5, fill: 'var(--color-primary)' }}
                    activeDot={{ r: 5 }}
                    connectNulls
                    isAnimationActive={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>

        <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-subtle)] p-4">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
            <h3 className="flex items-center gap-2 text-sm font-semibold text-[var(--text-primary)]">
              <HeartPulse className="h-4 w-4 text-[var(--color-primary)]" aria-hidden="true" />
              <span>Tension artérielle (mmHg) et fréquence cardiaque (bpm)</span>
            </h3>
            <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--text-secondary)] tabular-nums">
              <span>
                {summary.bpHrCount}{' '}
                {summary.bpHrCount > 1 ? 'relevés' : 'relevé'} sur {periodDays} j
              </span>
              {summary.avgSystolicBp !== undefined && summary.avgDiastolicBp !== undefined && (
                <span>
                  Moy. TA {formatFrenchNumber(summary.avgSystolicBp, 0)}/
                  {formatFrenchNumber(summary.avgDiastolicBp, 0)} mmHg
                </span>
              )}
              {summary.avgHeartRateBpm !== undefined && (
                <span>Moy. FC {formatFrenchNumber(summary.avgHeartRateBpm, 0)} bpm</span>
              )}
            </div>
          </div>

          {bpHrPoints.length === 0 ? (
            <div className="rounded-xl border border-dashed border-[var(--border-strong)] bg-[var(--bg-card)] p-6 text-center text-sm text-[var(--text-secondary)]">
              Aucun relevé de tension artérielle ou de fréquence cardiaque sur les {periodDays}{' '}
              derniers jours.
            </div>
          ) : (
            <div
              className="w-full rounded-xl bg-[var(--bg-card)] p-2"
              role="img"
              aria-label={`Courbe tension artérielle et fréquence cardiaque sur ${periodDays} jours : ${summary.bpHrCount} ${summary.bpHrCount > 1 ? 'relevés' : 'relevé'}`}
            >
              <ResponsiveContainer
                width="100%"
                height={240}
                minWidth={0}
                initialDimension={{ width: 640, height: 240 }}
              >
                <LineChart data={bpHrPoints} margin={{ top: 12, right: 16, left: 4, bottom: 4 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border-subtle)" />
                  <XAxis
                    dataKey="label"
                    tick={{ fontSize: 12, fill: 'var(--text-secondary)' }}
                    stroke="var(--border-strong)"
                  />
                  <YAxis
                    tick={{ fontSize: 12, fill: 'var(--text-secondary)' }}
                    stroke="var(--border-strong)"
                    width={42}
                  />
                  <Tooltip
                    formatter={(value, name) => {
                      const unit = name === 'FC (bpm)' ? 'bpm' : 'mmHg';
                      return [
                        typeof value === 'number'
                          ? `${formatFrenchNumber(value, 0)} ${unit}`
                          : String(value ?? ''),
                        String(name ?? ''),
                      ];
                    }}
                    labelFormatter={(_label, payload) => {
                      const rawDate = payload?.[0]?.payload?.date;
                      return typeof rawDate === 'string' ? formatFullDateFr(rawDate) : '';
                    }}
                    contentStyle={{
                      backgroundColor: 'var(--bg-card)',
                      borderColor: 'var(--border-subtle)',
                      borderRadius: '0.75rem',
                      color: 'var(--text-primary)',
                    }}
                  />
                  <Legend wrapperStyle={{ fontSize: 12 }} />
                  <Line
                    type="monotone"
                    dataKey="systolicBp"
                    name="TA systolique (mmHg)"
                    stroke="#144A68"
                    strokeWidth={2.2}
                    dot={{ r: 3 }}
                    connectNulls
                    isAnimationActive={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="diastolicBp"
                    name="TA diastolique (mmHg)"
                    stroke="#0F766E"
                    strokeWidth={2}
                    dot={{ r: 3 }}
                    connectNulls
                    isAnimationActive={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="heartRateBpm"
                    name="FC (bpm)"
                    stroke="#B45309"
                    strokeWidth={2}
                    strokeDasharray="4 3"
                    dot={{ r: 3 }}
                    connectNulls
                    isAnimationActive={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>

        {summary.points.length > 0 && (
          <details className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-subtle)] p-3">
            <summary className="touch-target flex cursor-pointer list-none items-center justify-between gap-2 text-xs font-semibold text-[var(--text-primary)]">
              <span>
                Tableau accessible des valeurs ({summary.points.length}{' '}
                {summary.points.length > 1 ? 'relevés' : 'relevé'} sur {periodDays} j)
              </span>
              <span className="text-[var(--color-primary)]">Déplier</span>
            </summary>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full border-collapse text-left text-xs tabular-nums">
                <thead>
                  <tr className="border-b border-[var(--border-strong)] text-[var(--text-secondary)]">
                    <th className="px-2 py-1.5 font-semibold">Date</th>
                    <th className="px-2 py-1.5 font-semibold">Poids</th>
                    <th className="px-2 py-1.5 font-semibold">Tension (mmHg)</th>
                    <th className="px-2 py-1.5 font-semibold">FC (bpm)</th>
                  </tr>
                </thead>
                <tbody>
                  {summary.points.map((pt) => (
                    <tr
                      key={pt.date}
                      className="border-b border-[var(--border-subtle)] last:border-b-0"
                    >
                      <td className="px-2 py-1.5 text-[var(--text-primary)]">
                        {formatFullDateFr(pt.date)}
                      </td>
                      <td className="px-2 py-1.5 text-[var(--text-primary)]">
                        {pt.weightKg !== undefined ? formatWeightKgFr(pt.weightKg) : '--'}
                      </td>
                      <td className="px-2 py-1.5 text-[var(--text-primary)]">
                        {pt.systolicBp !== undefined && pt.diastolicBp !== undefined
                          ? `${pt.systolicBp}/${pt.diastolicBp}`
                          : pt.systolicBp !== undefined
                            ? `${pt.systolicBp}/--`
                            : '--'}
                      </td>
                      <td className="px-2 py-1.5 text-[var(--text-primary)]">
                        {pt.heartRateBpm !== undefined ? `${pt.heartRateBpm} bpm` : '--'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </details>
        )}
      </div>
    </Card>
  );
}
