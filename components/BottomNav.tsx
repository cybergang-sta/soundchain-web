import Link from 'next/link'
import { Home, ListMusic, Film, ShoppingBag, Vote } from 'lucide-react'

type Mode = 'listener' | 'artist' | 'dao' | 'marketplace' | 'videos'

export default function BottomNav({ mode }: { mode: Mode }) {
  const item = (active: boolean) =>
    `flex flex-1 flex-col items-center gap-1 py-2 text-[10px] ${active ? 'text-bronze' : 'text-smoke'}`

  return (
    <div className="fixed bottom-0 left-0 right-0 z-20 flex items-center border-t border-hairline bg-surface/95 backdrop-blur-md md:hidden">
      <Link href="/" className={item(mode === 'listener')}>
        <Home size={18} />
        Home
      </Link>
      <div className={item(false)}>
        <ListMusic size={18} />
        Library
      </div>
      <Link href="/videos" className={item(mode === 'videos')}>
        <Film size={18} />
        Video
      </Link>
      <Link href="/marketplace" className={item(mode === 'marketplace')}>
        <ShoppingBag size={18} />
        Market
      </Link>
      <Link href="/dao" className={item(mode === 'dao')}>
        <Vote size={18} />
        DAO
      </Link>
    </div>
  )
}
