export default function GovernanceInfo() {
  return (
    <div className="rounded-2xl border border-hairline bg-surface p-5 md:p-[26px]">
      <div className="mb-5 text-[13px] font-semibold text-smoke">How SOUND governance works</div>
      <div className="flex flex-col gap-[14px] text-[13px] leading-[1.55] text-smoke">
        <p>
          SOUND holders vote on platform fees, treasury grants, and settlement infrastructure.
          Voting uses <span className="text-ivory">quadratic voting</span> - your power scales with
          the square root of tokens held, not the raw amount - so large holders can&rsquo;t dominate
          outcomes.
        </p>
        <p>
          Proposals need a quorum to pass. Passed proposals execute automatically through the
          governance contract - no platform team approval required.
        </p>
      </div>
      <button className="mt-5 w-full rounded-[10px] bg-bronze py-3 text-[13.5px] font-semibold text-ink">
        New proposal
      </button>
    </div>
  )
}
