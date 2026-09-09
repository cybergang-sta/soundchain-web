export default function NowPlayingBar() {
  return (
    <div className="fixed bottom-0 left-[76px] right-0 flex items-center gap-[22px] border-t border-hairline bg-surface/90 px-7 py-[14px] backdrop-blur-md">
      <div className="h-[46px] w-[46px] flex-shrink-0 rounded-lg bg-gradient-to-br from-[#7a5a2c] to-[#2a2213]" />
      <div className="min-w-[150px]">
        <div className="text-[13px] font-semibold">Undertow</div>
        <div className="text-[11.5px] text-smoke">Marlowe Reed</div>
      </div>

      <div className="flex items-center gap-4 text-smoke">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M18 6 8 12l10 6V6ZM6 6v12" />
        </svg>
        <button
          aria-label="Play"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-ivory"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="#14120F">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M6 6l10 6L6 18V6ZM18 6v12" />
        </svg>
      </div>

      <div className="flex flex-1 items-center gap-[10px]">
        <span className="w-[34px] text-[11px] text-smoke">1:24</span>
        <div className="relative h-[3px] flex-1 rounded-full bg-hairline">
          <div className="absolute inset-y-0 left-0 w-[38%] rounded-full bg-ivory" />
        </div>
        <span className="w-[34px] text-[11px] text-smoke">3:41</span>
      </div>

      <div className="flex items-center gap-[7px] whitespace-nowrap border-l border-hairline pl-5 text-[11px] text-moss">
        <span className="royalty-dot h-[6px] w-[6px] rounded-full bg-moss" />
        Supporting Marlowe Reed · +$0.0021 · settled on-chain instantly
      </div>
    </div>
  )
}
