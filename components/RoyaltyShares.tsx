import type { RoyaltyShare } from '@/lib/data'
import { royaltyPortfolio } from '@/lib/data'

export default function RoyaltyShares({ shares }: { shares: RoyaltyShare[] }) {
  return (
    <div className="mb-8 md:mb-11">
      <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2 md:mb-[18px]">
        <h2 className="font-serif text-[18px] font-normal md:text-[22px]">Your Royalty Portfolio</h2>
        <span className="text-[12px] text-smoke md:text-[12.5px]">View all NFTs</span>
      </div>
      <div className="mb-5 grid grid-cols-2 gap-3 md:max-w-[460px]">
        <div className="rounded-[14px] border border-hairline bg-surface p-4">
          <div className="mb-1 text-[11px] text-smoke">Accrued all-time royalties</div>
          <div className="text-[20px] font-semibold text-moss md:text-[24px]">{royaltyPortfolio.accruedAllTime}</div>
        </div>
        <div className="rounded-[14px] border border-hairline bg-surface p-4">
          <div className="mb-1 text-[11px] text-smoke">This stream cycle</div>
          <div className="text-[20px] font-semibold text-moss md:text-[24px]">{royaltyPortfolio.accruedThisCycle}</div>
        </div>
      </div>
      <div className="no-scrollbar flex gap-3 overflow-x-auto pb-2 md:gap-[18px]">
        {shares.map((s) => (
          <div
            key={s.artist + s.track}
            className="w-[180px] flex-shrink-0 rounded-2xl border border-hairline bg-surface p-4 md:w-[220px]"
          >
            <div
              className="relative mb-3 h-[100px] w-full overflow-hidden rounded-xl md:h-[130px]"
              style={{ background: `linear-gradient(155deg, ${s.from}, ${s.to})` }}
            >
              <span className="absolute left-[10px] top-[10px] rounded-full border border-bronze/30 bg-ink/70 px-[9px] py-1 text-[10.5px] font-semibold text-bronze backdrop-blur-sm">
                Music NFT
              </span>
              {s.firstFan && (
                <span className="absolute right-[10px] top-[10px] rounded-full border border-moss/40 bg-ink/70 px-[9px] py-1 text-[10.5px] font-semibold text-moss backdrop-blur-sm">
                  ★ First Fan
                </span>
              )}
            </div>
            <div className="mb-[2px] text-[13.5px] font-semibold">{s.track}</div>
            <div className="mb-[10px] text-[12px] text-smoke">{s.artist}</div>
            <div className="flex items-center justify-between border-t border-hairline pt-[10px]">
              <span className="text-[11.5px] text-smoke">Your share</span>
              <span className="text-[12.5px] font-semibold text-moss">{s.share}</span>
            </div>
            {s.playChange && (
              <div className="mt-2 text-[11px] font-medium text-bronze">{s.playChange}</div>
            )}
            {s.firstFan && (
              <div className="mt-1 text-[10.5px] text-smoke">Permanent, non-transferable on-chain badge</div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
