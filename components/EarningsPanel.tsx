import { royaltySplit } from '@/lib/data'

export default function EarningsPanel() {
  const mine = royaltySplit.splits.find((s) => s.mine)

  return (
    <div className="rounded-2xl border border-hairline bg-surface p-5 md:p-[26px]">
      <div className="mb-5 text-[13px] font-semibold text-smoke">Royalty earnings</div>

      <div className="mb-1 font-serif text-[30px] font-normal md:text-[40px]">{mine?.value}</div>
      <div className="mb-4 flex items-center gap-[6px] text-[12.5px] text-moss">
        <span className="royalty-dot h-[6px] w-[6px] rounded-full bg-moss" />
        Accruing in real time this stream cycle
      </div>
      <div className="mb-5 text-[12px] text-smoke">
        From <span className="font-semibold text-ivory">{royaltySplit.totalRevenue}</span> in total streaming
        revenue this cycle, split on-chain:
      </div>

      <div className="flex flex-col gap-[12px]">
        {royaltySplit.splits.map((s) => (
          <div
            key={s.label}
            className={`flex items-center justify-between border-b border-hairline pb-[12px] last:border-b-0 last:pb-0 ${
              s.mine ? 'text-ivory' : 'text-smoke'
            }`}
          >
            <span className="text-[13px]">
              {s.label} <span className="text-smoke">· {s.sub}</span>
            </span>
            <span className={`text-[14px] font-semibold ${s.mine ? 'text-bronze' : ''}`}>{s.value}</span>
          </div>
        ))}
      </div>

      <button className="mt-5 w-full rounded-[10px] bg-bronze py-3 text-[13.5px] font-semibold text-ink">
        Withdraw to wallet
      </button>
    </div>
  )
}
