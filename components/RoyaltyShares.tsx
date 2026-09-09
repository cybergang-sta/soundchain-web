import type { RoyaltyShare } from '@/lib/data'

export default function RoyaltyShares({ shares }: { shares: RoyaltyShare[] }) {
  return (
    <div className="mb-11">
      <div className="mb-[18px] flex items-baseline justify-between">
        <h2 className="font-serif text-[22px] font-normal">Your Royalty Shares</h2>
        <span className="text-[12.5px] text-smoke">View all NFTs</span>
      </div>
      <div className="no-scrollbar flex gap-[18px] overflow-x-auto pb-2">
        {shares.map((s) => (
          <div
            key={s.artist + s.track}
            className="w-[220px] flex-shrink-0 rounded-2xl border border-hairline bg-surface p-4"
          >
            <div
              className="relative mb-3 h-[130px] w-full overflow-hidden rounded-xl"
              style={{ background: `linear-gradient(155deg, ${s.from}, ${s.to})` }}
            >
              <span className="absolute left-[10px] top-[10px] rounded-full border border-bronze/30 bg-ink/70 px-[9px] py-1 text-[10.5px] font-semibold text-bronze backdrop-blur-sm">
                Music NFT
              </span>
            </div>
            <div className="mb-[2px] text-[13.5px] font-semibold">{s.track}</div>
            <div className="mb-[10px] text-[12px] text-smoke">{s.artist}</div>
            <div className="flex items-center justify-between border-t border-hairline pt-[10px]">
              <span className="text-[11.5px] text-smoke">Your share</span>
              <span className="text-[12.5px] font-semibold text-moss">{s.share}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
