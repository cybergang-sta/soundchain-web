import type { EditorialPlacement } from '@/lib/data'

export default function EditorialPanel({ placements }: { placements: EditorialPlacement[] }) {
  return (
    <div className="rounded-2xl border border-hairline bg-surface p-5 md:p-[26px]">
      <div className="mb-5 text-[13px] font-semibold text-smoke">Playlist placements</div>
      <div>
        {placements.map((p) => (
          <div
            key={p.playlist}
            className="flex items-center justify-between gap-3 border-b border-hairline py-[10px] last:border-b-0"
          >
            <div className="min-w-0">
              <div className="truncate text-[13px] font-semibold">{p.playlist}</div>
              <div className="text-[11.5px] text-smoke">
                {p.curator} · added {p.addedOn}
              </div>
            </div>
            <span className="flex-shrink-0 text-[12.5px] font-semibold text-moss">+{p.listensFromPlacement}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
