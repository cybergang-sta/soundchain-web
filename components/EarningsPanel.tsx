export default function EarningsPanel() {
  return (
    <div className="rounded-2xl border border-hairline bg-surface p-[26px]">
      <div className="mb-5 text-[13px] font-semibold text-smoke">Royalty earnings</div>

      <div className="mb-1 font-serif text-[40px] font-normal">$1,842.60</div>
      <div className="mb-[26px] flex items-center gap-[6px] text-[12.5px] text-moss">
        <span className="royalty-dot h-[6px] w-[6px] rounded-full bg-moss" />
        Accruing in real time this stream cycle
      </div>

      <div className="flex flex-col gap-[14px]">
        <div className="flex items-center justify-between border-b border-hairline pb-[14px]">
          <span className="text-[13px] text-smoke">Direct listener support</span>
          <span className="text-[14px] font-semibold">$1,410.20</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[13px] text-smoke">Platform-pool royalties</span>
          <span className="text-[14px] font-semibold">$432.40</span>
        </div>
      </div>

      <button className="mt-5 w-full rounded-[10px] bg-bronze py-3 text-[13.5px] font-semibold text-ink">
        Withdraw to wallet
      </button>
    </div>
  )
}
