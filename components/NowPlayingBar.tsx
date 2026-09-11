import TipButton from './TipButton'

export default function NowPlayingBar() {
  return (
    <div className="fixed bottom-16 left-0 right-0 z-10 flex items-center gap-3 border-t border-hairline bg-surface/90 px-4 py-[10px] backdrop-blur-md md:bottom-0 md:left-[76px] md:gap-[22px] md:px-7 md:py-[14px]">
      <div className="h-10 w-10 flex-shrink-0 rounded-lg bg-gradient-to-br from-[#7a5a2c] to-[#2a2213] md:h-[46px] md:w-[46px]" />
      <div className="min-w-0 md:min-w-[150px]">
        <div className="truncate text-[12.5px] font-semibold md:text-[13px]">Undertow</div>
        <div className="truncate text-[11px] text-smoke md:text-[11.5px]">Marlowe Reed</div>
      </div>

      <div className="flex items-center gap-3 text-smoke md:gap-4">
        <svg
          viewBox="0 0 24 24"
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          className="hidden sm:block"
        >
          <path d="M18 6 8 12l10 6V6ZM6 6v12" />
        </svg>
        <button aria-label="Play" className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-ivory">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="#14120F">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
        <svg
          viewBox="0 0 24 24"
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          className="hidden sm:block"
        >
          <path d="M6 6l10 6L6 18V6ZM18 6v12" />
        </svg>
      </div>

      <div className="hidden flex-1 items-center gap-[10px] md:flex">
        <span className="w-[34px] text-[11px] text-smoke">1:24</span>
        <div className="relative h-[3px] flex-1 rounded-full bg-hairline">
          <div className="absolute inset-y-0 left-0 w-[38%] rounded-full bg-ivory" />
        </div>
        <span className="w-[34px] text-[11px] text-smoke">3:41</span>
      </div>

      <TipButton />

      <div className="hidden items-center gap-[10px] whitespace-nowrap border-l border-hairline pl-5 text-[11px] text-moss xl:flex">
        <div className="flex h-[14px] items-end gap-[2px]">
          {[0, 1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className="sound-bar h-full w-[2px] rounded-full bg-moss"
              style={{ animationDelay: `${i * 0.13}s` }}
            />
          ))}
        </div>
        <span>Supporting Marlowe Reed · +$0.0021 · settled on-chain instantly</span>
        <span className="text-[10.5px] text-smoke">· Content ID disputes: 0</span>
      </div>
    </div>
  )
}
