import type { VideoItem } from '@/lib/data'

const gateStyle: Record<VideoItem['gated'], string> = {
  None: '',
  NFT: 'border-bronze/30 bg-ink/70 text-bronze',
  Premium: 'border-moss/30 bg-ink/70 text-moss',
}

export default function VideoGrid({ videos }: { videos: VideoItem[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {videos.map((v) => (
        <div key={v.title} className="rounded-2xl border border-hairline bg-surface p-4">
          <div
            className="relative mb-3 flex h-[150px] w-full items-center justify-center overflow-hidden rounded-xl"
            style={{ background: `linear-gradient(155deg, ${v.from}, ${v.to})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <button
              aria-label="Play video"
              className="relative flex h-11 w-11 items-center justify-center rounded-full bg-ivory/90"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#14120F">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
            <span className="absolute bottom-[10px] right-[10px] rounded-full bg-ink/70 px-[8px] py-[3px] text-[10.5px] font-medium">
              {v.duration}
            </span>
            {v.gated !== 'None' && (
              <span
                className={`absolute left-[10px] top-[10px] rounded-full border px-[9px] py-1 text-[10.5px] font-semibold backdrop-blur-sm ${gateStyle[v.gated]}`}
              >
                {v.gated === 'NFT' ? 'NFT-gated' : 'Premium'}
              </span>
            )}
            <span className="absolute left-[10px] bottom-[10px] rounded-full bg-ink/70 px-[8px] py-[3px] text-[10.5px] font-medium text-smoke">
              {v.kind}
            </span>
          </div>
          <div className="mb-[2px] truncate text-[14px] font-semibold">{v.title}</div>
          <div className="text-[12px] text-smoke">{v.artist}</div>
        </div>
      ))}
    </div>
  )
}
