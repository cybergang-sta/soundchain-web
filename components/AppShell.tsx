import Rail from './Rail'
import Topbar from './Topbar'
import NowPlayingBar from './NowPlayingBar'
import BottomNav from './BottomNav'

type Mode = 'listener' | 'artist' | 'dao' | 'marketplace' | 'videos'

export default function AppShell({ mode, children }: { mode: Mode; children: React.ReactNode }) {
  const showPlayer = mode !== 'artist'

  return (
    <div className="grid min-h-screen grid-cols-1 md:grid-cols-[76px_1fr]">
      <Rail mode={mode} />
      <div className="flex min-h-screen flex-col">
        <Topbar mode={mode} />
        <div
          className={`px-4 pt-6 md:px-10 md:pt-9 ${
            showPlayer ? 'pb-[210px] md:pb-[140px]' : 'pb-24 md:pb-14'
          }`}
        >
          {children}
        </div>
        {showPlayer && <NowPlayingBar />}
      </div>
      <BottomNav mode={mode} />
    </div>
  )
}
