import type { ListeningParty } from '@/lib/data'

export default function ListeningParties({ parties }: { parties: ListeningParty[] }) {
  return (
    <div className="mb-8 md:mb-11">
      <div className="mb-3 flex items-baseline justify-between md:mb-[18px]">
        <h2 className="font-serif text-[18px] font-normal md:text-[22px]">Live Listening Parties</h2>
        <span className="text-[12px] text-smoke md:text-[12.5px]">See all</span>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {parties.map((p) => (
          <div key={p.title} className="flex items-center gap-4 rounded-2xl border border-hairline bg-surface p-4">
            <div className="h-11 w-11 flex-shrink-0 rounded-full bg-gradient-to-br from-[#7a5a2c] to-[#40331a]" />
            <div className="min-w-0 flex-1">
              <div className="truncate text-[13.5px] font-semibold">{p.title}</div>
              <div className="text-[12px] text-smoke">
                {p.artist} · {p.when}
              </div>
            </div>
            <span
              className={`flex-shrink-0 rounded-full px-[9px] py-[4px] text-[10.5px] font-semibold ${
                p.nftRequired ? 'bg-bronze/10 text-bronze' : 'bg-moss/10 text-moss'
              }`}
            >
              {p.nftRequired ? 'NFT holders' : 'Open to all'}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
