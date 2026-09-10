import { artistProTier } from '@/lib/data'

export default function ArtistProBanner() {
  return (
    <div className="mb-4 flex flex-col items-start justify-between gap-4 rounded-2xl border border-bronze/25 bg-bronze/[0.06] p-5 sm:flex-row sm:items-center md:mb-[22px] md:p-[26px]">
      <div>
        <div className="mb-1 flex items-center gap-2">
          <span className="text-[14px] font-semibold">{artistProTier.name}</span>
          <span className="rounded-full bg-bronze/15 px-[9px] py-[2px] text-[11px] font-semibold text-bronze">
            {artistProTier.price}
          </span>
        </div>
        <div className="text-[12.5px] text-smoke">
          {artistProTier.tagline} - {artistProTier.perks.join(' · ')}
        </div>
      </div>
      <button className="w-full flex-shrink-0 rounded-[10px] bg-bronze px-5 py-[10px] text-[13px] font-semibold text-ink sm:w-auto">
        Upgrade
      </button>
    </div>
  )
}
