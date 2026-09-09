import Link from 'next/link'

export default function Topbar({ mode }: { mode: 'listener' | 'artist' | 'dao' }) {
  const tab = (active: boolean) =>
    `rounded-full px-5 py-[9px] text-[13.5px] font-medium transition-colors ${
      active ? 'bg-bronze font-semibold text-ink' : 'text-smoke hover:text-ivory'
    }`

  return (
    <div className="flex items-center justify-between gap-6 border-b border-hairline px-10 py-5">
      <div className="flex gap-0.5 rounded-full border border-hairline bg-surface p-1">
        <Link href="/" className={tab(mode === 'listener')}>
          Listener
        </Link>
        <Link href="/artist" className={tab(mode === 'artist')}>
          Artist Studio
        </Link>
        <Link href="/dao" className={tab(mode === 'dao')}>
          DAO
        </Link>
      </div>

      <div className="mx-7 max-w-[420px] flex-1">
        <input
          className="w-full rounded-[10px] border border-hairline bg-surface px-[14px] py-[10px] text-[13.5px] text-ivory placeholder:text-smoke focus:outline-none focus:ring-1 focus:ring-bronze"
          placeholder="Search artists, playlists, mixes…"
        />
      </div>

      <div className="flex items-center gap-[14px] rounded-full border border-hairline bg-surface py-2 pl-2 pr-[14px]">
        <div className="h-[26px] w-[26px] rounded-full border border-hairline bg-gradient-to-br from-[#3a3226] to-[#1a160e]" />
        <div>
          <div className="text-[13px] font-semibold leading-none">1,204.30 USDC</div>
          <div className="mt-[2px] text-[10.5px] text-smoke">Wallet · MegaETH L2</div>
        </div>
        <div className="h-7 w-px bg-hairline" />
        <div>
          <div className="text-[13px] font-semibold leading-none text-bronze">842 SOUND</div>
          <div className="mt-[2px] text-[10.5px] text-smoke">Governance token</div>
        </div>
      </div>
    </div>
  )
}
