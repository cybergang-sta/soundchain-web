import type { Folder } from '@/lib/data'

export default function LibraryShelf({ folders }: { folders: Folder[] }) {
  return (
    <div>
      <div className="mb-[18px] flex items-baseline justify-between">
        <h2 className="font-serif text-[22px] font-normal">Your Library</h2>
        <span className="text-[12.5px] text-smoke">Manage folders</span>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-4">
        {folders.map((f) => (
          <div key={f.name} className="flex flex-col gap-[10px] rounded-[14px] border border-hairline bg-surface p-4">
            <div className="grid h-[76px] grid-cols-2 gap-[3px] overflow-hidden rounded-lg">
              <div style={{ background: `linear-gradient(155deg, ${f.from}, ${f.to})` }} />
              <div style={{ background: `linear-gradient(155deg, ${f.to}, ${f.from})` }} />
              <div style={{ background: `linear-gradient(155deg, ${f.from}, ${f.to}80)` }} />
              <div style={{ background: `linear-gradient(155deg, ${f.to}, ${f.from}80)` }} />
            </div>
            <div className="text-[13px] font-semibold">{f.name}</div>
            <div className="text-[11.5px] text-smoke">{f.count} playlists</div>
          </div>
        ))}
      </div>
    </div>
  )
}
