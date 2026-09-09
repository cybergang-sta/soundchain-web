export default function Hero() {
  return (
    <div
      className="relative mb-11 flex min-h-[280px] flex-col justify-end overflow-hidden rounded-[20px] border border-hairline p-11"
      style={{
        background:
          'linear-gradient(0deg, rgba(20,18,15,0.96) 5%, rgba(20,18,15,0.35) 65%, rgba(20,18,15,0.05) 100%), radial-gradient(circle at 78% 22%, #3d2f18 0%, #201a10 46%, #14120F 78%)',
      }}
    >
      <div className="mb-[14px] text-[12.5px] font-semibold text-bronze">Curated by the community</div>
      <h1 className="mb-[14px] max-w-[620px] font-serif text-[44px] font-normal leading-[1.08]">
        Late Nights, Low End - bass music for the hours no one&rsquo;s watching
      </h1>
      <p className="mb-[26px] max-w-[520px] text-[15px] leading-[1.55] text-smoke">
        A 34-track descent through UK garage, dub, and half-time bass. Made for the drive home.
      </p>
      <div className="flex items-center gap-3">
        <div className="h-[34px] w-[34px] flex-shrink-0 rounded-full bg-gradient-to-br from-[#7a5a2c] to-[#40331a]" />
        <div>
          <div className="text-[13.5px] font-semibold">Curated by Nia Fontaine</div>
          <div className="text-[12.5px] text-smoke">2,340 followers · Updated 3 days ago</div>
        </div>
      </div>
      <button
        aria-label="Play playlist"
        className="absolute bottom-11 right-11 flex h-[58px] w-[58px] items-center justify-center rounded-full bg-bronze shadow-[0_8px_24px_rgba(200,155,60,0.25)]"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#1a1509">
          <path d="M8 5v14l11-7z" />
        </svg>
      </button>
    </div>
  )
}
