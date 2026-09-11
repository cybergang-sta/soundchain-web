import AppShell from '@/components/AppShell'
import StatsStrip from '@/components/StatsStrip'
import ArtistProBanner from '@/components/ArtistProBanner'
import ListensChart from '@/components/ListensChart'
import EarningsPanel from '@/components/EarningsPanel'
import Leaderboard from '@/components/Leaderboard'
import DemographicsPanel from '@/components/DemographicsPanel'
import EditorialPanel from '@/components/EditorialPanel'
import UploadCards from '@/components/UploadCards'
import MastersPanel from '@/components/MastersPanel'
import RevenueReportCard from '@/components/RevenueReportCard'
import { topListeners, editorialPlacements } from '@/lib/data'

export default function ArtistPage() {
  return (
    <AppShell mode="artist">
      <StatsStrip />
      <ArtistProBanner />
      <div className="mb-4 grid grid-cols-1 gap-4 md:mb-[22px] md:gap-[22px] lg:grid-cols-[1.3fr_1fr]">
        <ListensChart />
        <EarningsPanel />
      </div>
      <div className="mb-4 grid grid-cols-1 gap-4 md:mb-[22px] md:gap-[22px] lg:grid-cols-[1.3fr_1fr]">
        <Leaderboard listeners={topListeners} />
        <DemographicsPanel />
      </div>
      <div className="mb-4 grid grid-cols-1 gap-4 md:mb-[22px] md:gap-[22px] lg:grid-cols-[1.3fr_1fr]">
        <UploadCards />
        <EditorialPanel placements={editorialPlacements} />
      </div>
      <MastersPanel />
      <div className="mt-4 grid grid-cols-1 gap-4 md:mt-[22px] md:gap-[22px] lg:grid-cols-2">
        <RevenueReportCard />
      </div>
    </AppShell>
  )
}
