import type { Playlist } from '@/lib/data'

export default function PlaylistRail({ title, playlists }: { title: string; playlists: Playlist[] }) {
  return (
    <div className="mb-11">
      <div className="mb-[18px] flex items-baseline justify-between">
        <h2 className="font-serif text-[22px] font-normal">{title}</h2>
        <span className="text-[12.5px] text-smoke">See all</span>
      </div>
      <div className="no-scrollbar flex gap-[18px] overflow-x-auto pb-2">
        {playlists.map((p) => (
          <div key={p.title} className="w-[190px] flex-shrink-0">
            <div
              className="relative mb-3 h-[190px] w-[190px] overflow-hidden rounded-2xl"
              style={{ background: `linear-gradient(155deg, ${p.from}, ${p.to})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
              <span className="absolute left-[10px] top-[10px] rounded-full border border-white/15 bg-ink/65 px-[9px] py-1 text-[10.5px] font-semibold backdrop-blur-sm">
                {p.tag}
              </span>
            </div>
            <div className="mb-[3px] text-[14px] font-semibold">{p.title}</div>
            <div className="text-[12px] text-smoke">{p.meta}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
