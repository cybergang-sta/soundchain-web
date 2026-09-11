import { revenueReportCard } from '@/lib/data'

export default function RevenueReportCard() {
  return (
    <div className="rounded-2xl border border-hairline bg-surface p-5 md:p-[26px]">
      <div className="mb-5 flex items-center justify-between">
        <span className="text-[13px] font-semibold text-smoke">Public revenue report card</span>
        <span className="rounded-full bg-moss/10 px-[10px] py-[4px] text-[11px] font-semibold text-moss">
          {revenueReportCard.public ? 'Visible to fans' : 'Hidden'}
        </span>
      </div>

      <p className="mb-5 text-[12.5px] leading-[1.55] text-smoke">
        Radically transparent by default. Anyone can verify these figures on-chain, fan or not.
      </p>

      <div className="mb-4 grid grid-cols-2 gap-3">
        <div className="rounded-[12px] bg-surface-2 p-3">
          <div className="mb-1 text-[11px] text-smoke">Lifetime streaming earnings</div>
          <div className="text-[17px] font-semibold text-moss">{revenueReportCard.lifetimeEarnings}</div>
        </div>
        <div className="rounded-[12px] bg-surface-2 p-3">
          <div className="mb-1 text-[11px] text-smoke">Lifetime streams</div>
          <div className="text-[17px] font-semibold">{revenueReportCard.lifetimeStreams}</div>
        </div>
        <div className="rounded-[12px] bg-surface-2 p-3">
          <div className="mb-1 text-[11px] text-smoke">NFT holders</div>
          <div className="text-[17px] font-semibold">{revenueReportCard.nftHolders}</div>
        </div>
        <div className="rounded-[12px] bg-surface-2 p-3">
          <div className="mb-1 text-[11px] text-smoke">On-chain splits</div>
          <div className="text-[17px] font-semibold">{revenueReportCard.onChainSplits}</div>
        </div>
      </div>

      <div className="flex items-center justify-between rounded-[12px] border border-moss/25 bg-moss/5 px-4 py-3">
        <span className="text-[12.5px] text-smoke">Platform-wide Content ID disputes</span>
        <span className="text-[14px] font-semibold text-moss">{revenueReportCard.disputes}</span>
      </div>
    </div>
  )
}