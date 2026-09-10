'use client'

import { useState } from 'react'
import { marketplaceListings, stemListings, marketplaceFees } from '@/lib/data'

type Tab = 'nft' | 'stems'

export default function MarketplaceView() {
  const [tab, setTab] = useState<Tab>('nft')

  const tabBtn = (t: Tab, label: string) => (
    <button
      onClick={() => setTab(t)}
      className={`rounded-md px-4 py-2 text-[12.5px] font-medium transition-colors ${
        tab === t ? 'bg-ink text-ivory' : 'text-smoke hover:text-ivory'
      }`}
    >
      {label}
    </button>
  )

  return (
    <div>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-[2px] rounded-lg bg-surface-2 p-[3px]">
          {tabBtn('nft', 'Music NFTs')}
          {tabBtn('stems', 'Stems & Remix')}
        </div>
        <span className="text-[11.5px] text-smoke">
          {tab === 'nft' ? marketplaceFees.primary : 'Remix licenses pay the original creator automatically, on-chain'}
        </span>
      </div>

      {tab === 'nft' ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {marketplaceListings.map((n) => (
            <div key={n.title} className="rounded-2xl border border-hairline bg-surface p-4">
              <div
                className="relative mb-3 h-[150px] w-full overflow-hidden rounded-xl"
                style={{ background: `linear-gradient(155deg, ${n.from}, ${n.to})` }}
              >
                <span className="absolute left-[10px] top-[10px] rounded-full border border-white/15 bg-ink/65 px-[9px] py-1 text-[10.5px] font-semibold backdrop-blur-sm">
                  {n.kind === 'Primary' ? 'Primary drop' : 'Secondary'}
                </span>
              </div>
              <div className="mb-[2px] text-[14px] font-semibold">{n.title}</div>
              <div className="mb-3 text-[12px] text-smoke">{n.artist}</div>
              <div className="mb-3 flex items-center justify-between text-[11.5px] text-smoke">
                <span>{n.supply}</span>
                <span className="text-moss">{n.royaltyShare}</span>
              </div>
              <button className="w-full rounded-[10px] bg-bronze py-[9px] text-[13px] font-semibold text-ink">
                {n.kind === 'Primary' ? 'Mint' : 'Buy'} · {n.price}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {stemListings.map((s) => (
            <div
              key={s.title}
              className="flex flex-col gap-3 rounded-2xl border border-hairline bg-surface p-4 sm:flex-row sm:items-center"
            >
              <div
                className="h-14 w-14 flex-shrink-0 rounded-xl"
                style={{ background: `linear-gradient(155deg, ${s.from}, ${s.to})` }}
              />
              <div className="min-w-0 flex-1">
                <div className="truncate text-[14px] font-semibold">{s.title}</div>
                <div className="text-[12px] text-smoke">
                  {s.artist} · {s.bpm}
                </div>
              </div>
              <div className="flex items-center justify-between gap-4 sm:justify-end">
                <div className="text-right">
                  <div className="text-[13px] font-semibold">{s.price}</div>
                  <div className="text-[11px] text-smoke">{s.license} license</div>
                </div>
                <button className="flex-shrink-0 rounded-[10px] bg-bronze px-4 py-[8px] text-[12.5px] font-semibold text-ink">
                  License
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
