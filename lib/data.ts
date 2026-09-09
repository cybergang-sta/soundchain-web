export type Playlist = {
  title: string
  meta: string
  tag: string
  from: string
  to: string
}

export const risingPlaylists: Playlist[] = [
  { title: 'Concrete & Silk', meta: 'R&B · 21 tracks', tag: 'Rising', from: '#7a5a2c', to: '#2a2213' },
  { title: 'Analog Heartbeat', meta: 'Indie Folk · 18 tracks', tag: 'Rising', from: '#3d5a4a', to: '#182420' },
  { title: 'Sub Bass Therapy', meta: 'Bass Music · 26 tracks', tag: 'Rising', from: '#5a3d5a', to: '#241826' },
  { title: 'Neon Alley', meta: 'Synthwave · 15 tracks', tag: 'New', from: '#8a6a26', to: '#3a2c10' },
  { title: 'Dust & Vinyl', meta: 'Soul · 30 tracks', tag: 'Rising', from: '#3a4a5a', to: '#181f26' },
]

export type Folder = {
  name: string
  count: number
  from: string
  to: string
}

export const folders: Folder[] = [
  { name: 'Morning Runs', count: 24, from: '#7a5a2c', to: '#2a2213' },
  { name: 'Studio Focus', count: 41, from: '#3d5a4a', to: '#182420' },
  { name: 'Road Trip 2026', count: 63, from: '#5a3d5a', to: '#241826' },
  { name: 'Late Night Deep Cuts', count: 18, from: '#8a6a26', to: '#3a2c10' },
]

export type Listener = {
  name: string
  plays: number
}

export const topListeners: Listener[] = [
  { name: 'Jordan Alavez', plays: 980 },
  { name: 'Priya Nathan', plays: 908 },
  { name: 'Kofi Mensah', plays: 836 },
  { name: 'Elena Voss', plays: 764 },
  { name: 'Théo Marchand', plays: 692 },
  { name: 'Aiko Tanaka', plays: 620 },
  { name: 'Sam Okoye', plays: 548 },
  { name: 'Ruth Delacroix', plays: 476 },
  { name: 'Marco Rinaldi', plays: 404 },
  { name: 'Dana Whitfield', plays: 332 },
]

export const listensData = [
  { label: 'Mon', listens: 5200 },
  { label: 'Tue', listens: 6100 },
  { label: 'Wed', listens: 5800 },
  { label: 'Thu', listens: 7400 },
  { label: 'Fri', listens: 6900 },
  { label: 'Sat', listens: 8600 },
  { label: 'Sun', listens: 8100 },
]

export const statSummary = [
  { label: 'Listens this month', value: '48.2K' },
  { label: 'Unique listeners', value: '6,910' },
  { label: 'Growth vs last month', value: '+18%' },
  { label: 'Releases live', value: '3' },
]

export type RoyaltyShare = {
  artist: string
  track: string
  share: string
  from: string
  to: string
}

export const royaltyShares: RoyaltyShare[] = [
  { artist: 'Marlowe Reed', track: 'Undertow', share: '2.4% of plays', from: '#7a5a2c', to: '#2a2213' },
  { artist: 'Nia Fontaine', track: 'Static Bloom', share: '1.1% of plays', from: '#3d5a4a', to: '#182420' },
  { artist: 'Kwame Osei', track: 'Harmattan', share: '3.8% of plays', from: '#5a3d5a', to: '#241826' },
]

export type Proposal = {
  title: string
  status: 'Active' | 'Passed' | 'Failed'
  forPct: number
  endsIn: string
}

export const daoProposals: Proposal[] = [
  { title: 'Reduce platform fee from 8% to 6%', status: 'Active', forPct: 74, endsIn: '2 days left' },
  { title: 'Fund Q4 artist onboarding grants ($40K)', status: 'Active', forPct: 61, endsIn: '4 days left' },
  { title: 'Add a secondary settlement chain', status: 'Passed', forPct: 88, endsIn: 'Closed' },
]

export const soundWallet = {
  soundBalance: '842 SOUND',
  votingPower: '0.14%',
  treasuryValue: '$2.1M',
}

export const mastersInfo = {
  ownership: '100%',
  contract: '0x71C…9e3F',
  chain: 'MegaETH L2',
  terms: 'Full commercial rights retained - no label assignment',
}
