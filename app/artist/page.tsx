import AppShell from '@/components/AppShell'
import StatsStrip from '@/components/StatsStrip'
import ListensChart from '@/components/ListensChart'
import EarningsPanel from '@/components/EarningsPanel'
import Leaderboard from '@/components/Leaderboard'
import UploadCards from '@/components/UploadCards'
import MastersPanel from '@/components/MastersPanel'
import { topListeners } from '@/lib/data'

export default function ArtistPage() {
  return (
    <AppShell mode="artist">
      <StatsStrip />
      <div className="mb-[22px] grid grid-cols-[1.3fr_1fr] gap-[22px]">
        <ListensChart />
        <EarningsPanel />
      </div>
      <div className="mb-[22px] grid grid-cols-[1.3fr_1fr] gap-[22px]">
        <Leaderboard listeners={topListeners} />
        <UploadCards />
      </div>
      <MastersPanel />
    </AppShell>
  )
}
