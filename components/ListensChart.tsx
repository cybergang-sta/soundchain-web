'use client'

import { useState } from 'react'
import { AreaChart, Area, XAxis, ResponsiveContainer, Tooltip } from 'recharts'
import { listensData } from '@/lib/data'

const ranges = ['Day', 'Week', 'Month'] as const

export default function ListensChart() {
  const [range, setRange] = useState<(typeof ranges)[number]>('Week')

  return (
    <div className="rounded-2xl border border-hairline bg-surface p-5 md:p-[26px]">
      <div className="mb-5 flex items-center justify-between">
        <span className="text-[13px] font-semibold text-smoke">Listens over time</span>
        <div className="flex gap-[2px] rounded-lg bg-surface-2 p-[3px]">
          {ranges.map((r) => (
            <button
              key={r}
              onClick={() => setRange(r)}
              className={`rounded-md px-3 py-[6px] text-[11.5px] font-medium transition-colors ${
                range === r ? 'bg-ink text-ivory' : 'text-smoke hover:text-ivory'
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>
      <div className="h-[120px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={listensData} margin={{ top: 4, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#C89B3C" stopOpacity={0.35} />
                <stop offset="100%" stopColor="#C89B3C" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="label" hide />
            <Tooltip
              contentStyle={{
                background: '#1E1B17',
                border: '1px solid #2C2822',
                borderRadius: 8,
                fontSize: 12,
                color: '#F2ECE1',
              }}
              labelStyle={{ color: '#9C948A' }}
            />
            <Area
              type="monotone"
              dataKey="listens"
              stroke="#C89B3C"
              strokeWidth={2.4}
              fill="url(#chartFill)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
