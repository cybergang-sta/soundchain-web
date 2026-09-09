import { mastersInfo } from '@/lib/data'

export default function MastersPanel() {
  return (
    <div className="rounded-2xl border border-hairline bg-surface p-[26px]">
      <div className="mb-5 flex items-center justify-between">
        <span className="text-[13px] font-semibold text-smoke">Your masters</span>
        <span className="rounded-full bg-moss/10 px-[10px] py-[4px] text-[11px] font-semibold text-moss">
          {mastersInfo.ownership} owned
        </span>
      </div>

      <p className="mb-5 text-[13px] leading-[1.55] text-smoke">{mastersInfo.terms}</p>

      <div className="flex flex-col gap-[14px]">
        <div className="flex items-center justify-between border-b border-hairline pb-[14px]">
          <span className="text-[13px] text-smoke">Settlement chain</span>
          <span className="text-[13px] font-semibold">{mastersInfo.chain}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[13px] text-smoke">Rights contract</span>
          <span className="text-[13px] font-semibold">{mastersInfo.contract}</span>
        </div>
      </div>
    </div>
  )
}
