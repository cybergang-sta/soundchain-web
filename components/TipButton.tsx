'use client'

import { useState } from 'react'
import { tipPresets } from '@/lib/data'

export default function TipButton() {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative flex-shrink-0">
      <button
        onClick={() => setOpen((o) => !o)}
        className="rounded-full border border-bronze/30 px-3 py-[6px] text-[11px] font-semibold text-bronze hover:bg-bronze/10"
      >
        Tip
      </button>
      {open && (
        <div className="absolute bottom-full right-0 mb-2 w-[170px] rounded-xl border border-hairline bg-surface p-3 shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
          <div className="mb-2 text-[11px] text-smoke">Send a SOUND tip</div>
          <div className="flex flex-col gap-[6px]">
            {tipPresets.map((t) => (
              <button
                key={t}
                onClick={() => setOpen(false)}
                className="rounded-lg bg-surface-2 py-[6px] text-[12px] font-semibold text-ivory hover:bg-bronze/10 hover:text-bronze"
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
