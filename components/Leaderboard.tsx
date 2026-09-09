import type { Listener } from '@/lib/data'

export default function Leaderboard({ listeners }: { listeners: Listener[] }) {
  return (
    <div className="rounded-2xl border border-hairline bg-surface p-[26px]">
      <div className="mb-5 text-[13px] font-semibold text-smoke">Top 10 listeners</div>
      <div>
        {listeners.map((l, i) => (
          <div
            key={l.name}
            className="flex items-center gap-3 border-b border-hairline py-[10px] last:border-b-0"
          >
            <span className="w-[18px] text-[12px] font-semibold text-smoke">{i + 1}</span>
            <div className="h-8 w-8 flex-shrink-0 rounded-full bg-gradient-to-br from-[#7a5a2c] to-[#40331a]" />
            <span className="flex-1 text-[13px] font-semibold">{l.name}</span>
            <span className="text-[12px] text-smoke">{l.plays} plays</span>
          </div>
        ))}
      </div>
    </div>
  )
}
