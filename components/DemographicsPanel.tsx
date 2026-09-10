import { listenerDemographics, nftHolderCount } from '@/lib/data'

export default function DemographicsPanel() {
  return (
    <div className="rounded-2xl border border-hairline bg-surface p-5 md:p-[26px]">
      <div className="mb-1 text-[13px] font-semibold text-smoke">Listener demographics</div>
      <div className="mb-5 text-[12px] text-smoke">{nftHolderCount} across your catalog</div>

      <div className="flex flex-col gap-3">
        {listenerDemographics.map((d) => (
          <div key={d.region}>
            <div className="mb-1 flex items-center justify-between text-[12.5px]">
              <span>{d.region}</span>
              <span className="text-smoke">{d.pct}%</span>
            </div>
            <div className="h-[6px] w-full overflow-hidden rounded-full bg-hairline">
              <div className="h-full rounded-full bg-bronze" style={{ width: `${d.pct}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
