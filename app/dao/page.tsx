import AppShell from '@/components/AppShell'
import DaoStats from '@/components/DaoStats'
import ProposalList from '@/components/ProposalList'
import GovernanceInfo from '@/components/GovernanceInfo'
import { daoProposals } from '@/lib/data'

export default function DaoPage() {
  return (
    <AppShell mode="dao">
      <DaoStats />
      <div className="grid grid-cols-[1.3fr_1fr] gap-[22px]">
        <ProposalList proposals={daoProposals} />
        <GovernanceInfo />
      </div>
    </AppShell>
  )
}
