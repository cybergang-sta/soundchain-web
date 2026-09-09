import AppShell from '@/components/AppShell'
import Hero from '@/components/Hero'
import PlaylistRail from '@/components/PlaylistRail'
import RoyaltyShares from '@/components/RoyaltyShares'
import LibraryShelf from '@/components/LibraryShelf'
import { risingPlaylists, folders, royaltyShares } from '@/lib/data'

export default function ListenerPage() {
  return (
    <AppShell mode="listener">
      <Hero />
      <PlaylistRail title="Now Rising" playlists={risingPlaylists} />
      <RoyaltyShares shares={royaltyShares} />
      <LibraryShelf folders={folders} />
    </AppShell>
  )
}
