import { soundWallet, stakingInfo, quadraticVotingPower } from '@/lib/data'

export default function DaoStats() {
  const weight = quadraticVotingPower(842)

  const stats = [
    { label: 'Your SOUND balance', value: soundWallet.soundBalance },
    { label: 'Currently staked', value: stakingInfo.staked },
    { label: 'Voting weight (quadratic)', value: weight.toFixed(2) },
    { label: 'DAO treasury', value: soundWallet.treasuryValue },
  ]

  return (
    <div className="mb-4 grid grid-cols-2 gap-3 md:mb-[22px] md:grid-cols-4 md:gap-[14px]">
      {stats.map((s) => (
        <div key={s.label} className="rounded-[14px] border border-hairline bg-surface px-4 py-4 md:px-5 md:py-[18px]">
          <div className="mb-1 font-serif text-[20px] font-normal md:text-[26px]">{s.value}</div>
          <div className="text-[11.5px] text-smoke md:text-[12px]">{s.label}</div>
        </div>
      ))}
    </div>
  )
}
