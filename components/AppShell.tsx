import Rail from './Rail'
import Topbar from './Topbar'
import NowPlayingBar from './NowPlayingBar'

export default function AppShell({
  mode,
  children,
}: {
  mode: 'listener' | 'artist' | 'dao'
  children: React.ReactNode
}) {
  const showPlayer = mode !== 'artist'

  return (
    <div className="grid min-h-screen grid-cols-[76px_1fr]">
      <Rail mode={mode} />
      <div className="flex min-h-screen flex-col">
        <Topbar mode={mode} />
        <div className={`px-10 pt-9 ${showPlayer ? 'pb-[140px]' : 'pb-14'}`}>{children}</div>
        {showPlayer && <NowPlayingBar />}
      </div>
    </div>
  )
}
