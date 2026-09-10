import Link from 'next/link'

export default function Topbar({ mode }: { mode: 'listener' | 'artist' | 'dao' | 'marketplace' | 'videos' }) {
  const tab = (active: boolean) =>
    `whitespace-nowrap rounded-full px-3 py-[7px] text-[12px] font-medium transition-colors md:px-5 md:py-[9px] md:text-[13.5px] ${
      active ? 'bg-bronze font-semibold text-ink' : 'text-smoke hover:text-ivory'
    }`

  return (
    <div className="flex items-center justify-between gap-3 border-b border-hairline px-4 py-4 md:gap-6 md:px-10 md:py-5">
      <div className="flex flex-shrink-0 gap-0.5 rounded-full border border-hairline bg-surface p-1">
        <Link href="/" className={tab(mode === 'listener')}>
          Listener
        </Link>
        <Link href="/artist" className={tab(mode === 'artist')}>
          Artist
        </Link>
        <Link href="/dao" className={tab(mode === 'dao')}>
          DAO
        </Link>
      </div>

      <div className="mx-2 hidden max-w-[420px] flex-1 md:mx-7 md:block">
        <input
          className="w-full rounded-[10px] border border-hairline bg-surface px-[14px] py-[10px] text-[13.5px] text-ivory placeholder:text-smoke focus:outline-none focus:ring-1 focus:ring-bronze"
          placeholder="Search artists, playlists, mixes…"
        />
      </div>

      <div className="flex flex-shrink-0 items-center gap-2 rounded-full border border-hairline bg-surface py-2 pl-2 pr-3 md:gap-[14px] md:pr-[14px]">
        <div className="h-[26px] w-[26px] flex-shrink-0 rounded-full border border-hairline bg-gradient-to-br from-[#3a3226] to-[#1a160e]" />
        <div>
          <div className="whitespace-nowrap text-[12px] font-semibold leading-none md:text-[13px]">
            1,204.30 USDC
          </div>
          <div className="mt-[2px] hidden text-[10.5px] text-smoke sm:block">Wallet · MegaETH L2</div>
        </div>
        <div className="hidden h-7 w-px bg-hairline md:block" />
        <div className="hidden md:block">
          <div className="text-[13px] font-semibold leading-none text-bronze">842 SOUND</div>
          <div className="mt-[2px] text-[10.5px] text-smoke">Governance token</div>
        </div>
      </div>
    </div>
  )
}
