import { stakingInfo } from '@/lib/data'

export default function StakingPanel() {
  return (
    <div className="rounded-2xl border border-hairline bg-surface p-5 md:p-[26px]">
      <div className="mb-5 text-[13px] font-semibold text-smoke">SOUND staking</div>

      <div className="mb-4 grid grid-cols-2 gap-3">
        <div>
          <div className="mb-1 font-serif text-[24px] font-normal">{stakingInfo.staked}</div>
          <div className="text-[11.5px] text-smoke">Currently staked</div>
        </div>
        <div>
          <div className="mb-1 font-serif text-[24px] font-normal text-moss">{stakingInfo.pendingRewards}</div>
          <div className="text-[11.5px] text-smoke">Pending rewards</div>
        </div>
      </div>

      <p className="mb-5 text-[12.5px] leading-[1.55] text-smoke">
        {stakingInfo.weeklyRevenueShare}. Unstaking has a {stakingInfo.unlockPeriod}.
      </p>

      <div className="flex gap-3">
        <button className="flex-1 rounded-[10px] bg-bronze py-[10px] text-[13px] font-semibold text-ink">
          Stake more
        </button>
        <button className="flex-1 rounded-[10px] border border-hairline py-[10px] text-[13px] font-semibold text-ivory">
          Unstake
        </button>
      </div>
    </div>
  )
}
