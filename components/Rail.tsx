import Link from 'next/link'
import { Home, Search, ListMusic, Vote, User } from 'lucide-react'

export default function Rail({ mode }: { mode: 'listener' | 'artist' | 'dao' }) {
  const item = (active: boolean) =>
    `flex h-[38px] w-[38px] items-center justify-center rounded-[10px] transition-colors ${
      active ? 'bg-surface-2 text-bronze' : 'text-smoke hover:text-ivory'
    }`

  return (
    <div className="sticky top-0 flex h-screen w-[76px] flex-col items-center gap-7 border-r border-hairline py-[22px]">
      <div className="mb-2 flex h-[34px] w-[34px] items-center justify-center rounded-[9px] bg-gradient-to-br from-bronze to-[#8a6a26] font-serif text-[16px] font-semibold text-ink">
        S
      </div>
      <div className="flex flex-1 flex-col items-center gap-[22px]">
        <Link href="/" className={item(mode === 'listener')}>
          <Home size={19} />
        </Link>
        <div className={item(false)}>
          <Search size={19} />
        </div>
        <div className={item(false)}>
          <ListMusic size={19} />
        </div>
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
