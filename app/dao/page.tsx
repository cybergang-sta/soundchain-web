import AppShell from '@/components/AppShell'
import DaoStats from '@/components/DaoStats'
import ProposalList from '@/components/ProposalList'
import GovernanceInfo from '@/components/GovernanceInfo'
import StakingPanel from '@/components/StakingPanel'
import { daoProposals } from '@/lib/data'

export default function DaoPage() {
  return (
    <AppShell mode="dao">
      <DaoStats />
      <div className="grid grid-cols-1 gap-4 md:gap-[22px] lg:grid-cols-[1.3fr_1fr]">
        <ProposalList proposals={daoProposals} />
        <div className="flex flex-col gap-4 md:gap-[22px]">
          <StakingPanel />
          <GovernanceInfo />
        </div>
      </div>
    </AppShell>
  )
}
