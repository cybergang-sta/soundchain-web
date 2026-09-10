import type { Proposal } from '@/lib/data'
import { quadraticVotingPower } from '@/lib/data'

const statusStyle: Record<Proposal['status'], string> = {
  Active: 'bg-bronze/10 text-bronze',
  Passed: 'bg-moss/10 text-moss',
  Failed: 'bg-hairline text-smoke',
}

export default function ProposalList({ proposals }: { proposals: Proposal[] }) {
  const myWeight = quadraticVotingPower(842)

  return (
    <div className="rounded-2xl border border-hairline bg-surface p-5 md:p-[26px]">
      <div className="mb-1 text-[13px] font-semibold text-smoke">Active &amp; recent proposals</div>
      <div className="mb-5 text-[11.5px] text-smoke">
        Voting is quadratic - your weight is √(SOUND held) ≈ {myWeight.toFixed(2)}, not your raw balance.
      </div>
      <div className="flex flex-col gap-5">
        {proposals.map((p) => (
          <div key={p.title} className="border-b border-hairline pb-5 last:border-b-0 last:pb-0">
            <div className="mb-[10px] flex items-center justify-between gap-4">
              <span className="text-[14px] font-semibold">{p.title}</span>
              <span className={`flex-shrink-0 rounded-full px-[10px] py-[4px] text-[11px] font-semibold ${statusStyle[p.status]}`}>
                {p.status}
              </span>
            </div>
            <div className="mb-[6px] h-[6px] w-full overflow-hidden rounded-full bg-hairline">
              <div className="h-full rounded-full bg-bronze" style={{ width: `${p.forPct}%` }} />
            </div>
            <div className="mb-3 flex items-center justify-between text-[11.5px] text-smoke">
              <span>{p.forPct}% in favor</span>
              <span>{p.endsIn}</span>
            </div>
            {p.status === 'Active' && (
              <div className="flex gap-2">
                <button className="flex-1 rounded-lg bg-moss/10 py-[7px] text-[12px] font-semibold text-moss">
                  Vote For
                </button>
                <button className="flex-1 rounded-lg bg-hairline py-[7px] text-[12px] font-semibold text-smoke">
                  Vote Against
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
