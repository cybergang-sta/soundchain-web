import AppShell from '@/components/AppShell'
import Hero from '@/components/Hero'
import PlaylistRail from '@/components/PlaylistRail'
import RoyaltyShares from '@/components/RoyaltyShares'
import ListeningParties from '@/components/ListeningParties'
import LibraryShelf from '@/components/LibraryShelf'
import { risingPlaylists, folders, royaltyShares, listeningParties } from '@/lib/data'

export default function ListenerPage() {
  return (
    <AppShell mode="listener">
      <Hero />
      <PlaylistRail title="Now Rising" playlists={risingPlaylists} />
      <RoyaltyShares shares={royaltyShares} />
      <ListeningParties parties={listeningParties} />
      <LibraryShelf folders={folders} />
    </AppShell>
  )
}
