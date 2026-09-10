import AppShell from '@/components/AppShell'
import VideoGrid from '@/components/VideoGrid'
import { videoItems } from '@/lib/data'

export default function VideosPage() {
  const clips = videoItems.filter((v) => v.kind === 'Short Clip')
  const longform = videoItems.filter((v) => v.kind !== 'Short Clip')

  return (
    <AppShell mode="videos">
      <div className="mb-6">
        <h1 className="mb-1 font-serif text-[22px] font-normal md:text-[26px]">Video</h1>
        <p className="text-[13px] text-smoke">
          Music videos and live performances, streamed via decentralized transcoding. Short clips are free
          for everyone - full performances may be NFT- or Premium-gated.
        </p>
      </div>

      <div className="mb-3 text-[13px] font-semibold text-smoke">Music videos &amp; live performances</div>
      <div className="mb-10">
        <VideoGrid videos={longform} />
      </div>

      <div className="mb-3 text-[13px] font-semibold text-smoke">Short clips</div>
      <VideoGrid videos={clips} />
    </AppShell>
  )
}
