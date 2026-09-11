import Link from 'next/link'
import { Home, Search, ListMusic, ShoppingBag, Film, Vote, User } from 'lucide-react'

type Mode = 'listener' | 'artist' | 'dao' | 'marketplace' | 'videos'

export default function Rail({ mode }: { mode: Mode }) {
  const item = (active: boolean) =>
    `flex h-[38px] w-[38px] items-center justify-center rounded-[10px] transition-colors ${
      active ? 'bg-surface-2 text-bronze' : 'text-smoke hover:text-ivory'
    }`

  return (
    <div className="sticky top-0 hidden h-screen w-[76px] flex-col items-center gap-6 border-r border-hairline py-[22px] md:flex">
      <div className="mb-1 flex h-[34px] w-[34px] items-center justify-center rounded-[9px] bg-gradient-to-br from-bronze to-[#8a6a26] font-serif text-[16px] font-semibold text-ink">
        S
      </div>
      <div className="flex flex-1 flex-col items-center gap-[18px]">
        <Link href="/" className={item(mode === 'listener')}>
          <Home size={19} />
        </Link>
        <div className={item(false)}>
          <Search size={19} />
        </div>
        <Link href="/" className={item(false)}>
          <ListMusic size={19} />
        </Link>
        <Link href="/videos" className={item(mode === 'videos')}>
          <Film size={19} />
        </Link>
        <Link href="/marketplace" className={item(mode === 'marketplace')}>
          <ShoppingBag size={19} />
        </Link>
        <Link href="/dao" className={item(mode === 'dao')}>
          <Vote size={19} />
        </Link>
      </div>
      <div className={item(false)}>
        <User size={19} />
      </div>
    </div>
  )
}
