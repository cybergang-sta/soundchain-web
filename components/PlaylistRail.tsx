import type { Playlist } from '@/lib/data'

export default function PlaylistRail({ title, playlists }: { title: string; playlists: Playlist[] }) {
  return (
    <div className="mb-8 md:mb-11">
      <div className="mb-3 flex items-baseline justify-between md:mb-[18px]">
        <h2 className="font-serif text-[18px] font-normal md:text-[22px]">{title}</h2>
        <span className="text-[12px] text-smoke md:text-[12.5px]">See all</span>
      </div>
      <div className="no-scrollbar flex gap-3 overflow-x-auto pb-2 md:gap-[18px]">
        {playlists.map((p) => (
          <div key={p.title} className="w-[150px] flex-shrink-0 md:w-[190px]">
            <div
              className="relative mb-3 h-[150px] w-[150px] overflow-hidden rounded-2xl md:h-[190px] md:w-[190px]"
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
