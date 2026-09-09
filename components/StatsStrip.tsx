import { statSummary } from '@/lib/data'

export default function StatsStrip() {
  return (
    <div className="mb-[22px] grid grid-cols-4 gap-[14px]">
      {statSummary.map((s) => (
        <div key={s.label} className="rounded-[14px] border border-hairline bg-surface px-5 py-[18px]">
          <div className="mb-1 font-serif text-[26px] font-normal">{s.value}</div>
          <div className="text-[12px] text-smoke">{s.label}</div>
        </div>
      ))}
    </div>
  )
}
