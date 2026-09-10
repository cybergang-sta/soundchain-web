export default function UploadCards() {
  return (
    <div className="rounded-2xl border border-hairline bg-surface p-5 md:p-[26px]">
      <div className="mb-5 text-[13px] font-semibold text-smoke">Add new content</div>

      <div className="mb-[14px] flex items-center gap-3 rounded-2xl border border-dashed border-hairline p-4 md:gap-[18px] md:p-[30px]">
        <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-bronze/10">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C89B3C" strokeWidth="1.8">
            <path d="M12 3v12m0-12 4 4m-4-4-4 4" />
            <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
          </svg>
        </div>
        <div>
          <div className="mb-[3px] text-[14px] font-semibold">Upload a track</div>
          <div className="text-[12.5px] text-smoke">MP3, WAV, or FLAC · add cover art & credits</div>
        </div>
      </div>

      <div className="flex items-center gap-3 rounded-2xl border border-dashed border-hairline p-4 md:gap-[18px] md:p-[30px]">
        <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-bronze/10">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C89B3C" strokeWidth="1.8">
            <circle cx="12" cy="12" r="9" />
            <path d="M9 9h.01M15 9h.01M9.5 15c1-1 4-1 5 0" />
          </svg>
        </div>
        <div>
          <div className="mb-[3px] text-[14px] font-semibold">Upload a DJ mix</div>
          <div className="text-[12.5px] text-smoke">Add tracklist timestamps listeners can jump to</div>
        </div>
      </div>
    </div>
  )
}
