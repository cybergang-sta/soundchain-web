import { soundWallet } from '@/lib/data'

export default function DaoStats() {
  const stats = [
    { label: 'Your SOUND balance', value: soundWallet.soundBalance },
    { label: 'Your voting power', value: soundWallet.votingPower },
    { label: 'DAO treasury', value: soundWallet.treasuryValue },
  ]

  return (
    <div className="mb-[22px] grid grid-cols-3 gap-[14px]">
      {stats.map((s) => (
        <div key={s.label} className="rounded-[14px] border border-hairline bg-surface px-5 py-[18px]">
          <div className="mb-1 font-serif text-[26px] font-normal">{s.value}</div>
          <div className="text-[12px] text-smoke">{s.label}</div>
        </div>
      ))}
    </div>
  )
}
