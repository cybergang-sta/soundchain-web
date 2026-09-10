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
  { title: 'Reduce platform treasury share from 10% to 8%', status: 'Active', forPct: 74, endsIn: '2 days left' },
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

export type SubscriptionTier = {
  id: string
  name: string
  price: string
  tagline: string
  perks: string[]
}

export const subscriptionTiers: SubscriptionTier[] = [
  {
    id: 'free',
    name: 'Free',
    price: 'Free',
    tagline: 'Ad-supported streaming to get started',
    perks: [
      'Ad-supported streaming',
      'Limited skips',
      'Standard audio quality',
      'Earn SOUND for daily listening streaks',
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '$5.99/mo',
    tagline: 'Lossless, ad-free, and offline',
    perks: ['Lossless audio quality', 'Offline caching', 'No ads', 'Early access to exclusive drops'],
  },
  {
    id: 'family',
    name: 'Family',
    price: '$12.99/mo',
    tagline: 'Share Premium across your household',
    perks: ['Everything in Premium', 'Individual profiles for each listener', 'One shared bill'],
  },
]

export const artistProTier = {
  name: 'Artist Pro',
  price: '$9.99/mo',
  tagline: 'For creators who want deeper tools',
  perks: ['Advanced analytics', 'Priority support', 'Custom fan club tools', 'Featured playlist placement'],
}

export const royaltySplit = {
  totalRevenue: '$2,632.29',
  splits: [
    { label: 'Your earnings', sub: 'Artist · 70%', value: '$1,842.60', mine: true },
    { label: 'Fan NFT holders', sub: '15%', value: '$394.84', mine: false },
    { label: 'Platform treasury', sub: '10%', value: '$263.23', mine: false },
    { label: 'SOUND stakers', sub: '5%', value: '$131.61', mine: false },
  ],
}

// ---------- DAO: staking + quadratic voting ----------

export const stakingInfo = {
  staked: '420 SOUND',
  pendingRewards: '18.4 SOUND',
  unlockPeriod: '14-day unlock',
  weeklyRevenueShare: '5% of platform streaming revenue, split weekly among stakers',
}

export function quadraticVotingPower(soundBalance: number): number {
  return Math.round(Math.sqrt(soundBalance) * 100) / 100
}

// ---------- NFT Marketplace ----------

export type MarketListing = {
  title: string
  artist: string
  kind: 'Primary' | 'Secondary'
  price: string
  supply: string
  royaltyShare: string
  from: string
  to: string
}

export const marketplaceListings: MarketListing[] = [
  { title: 'Undertow', artist: 'Marlowe Reed', kind: 'Primary', price: '0.02 ETH', supply: '640 / 1,000 minted', royaltyShare: '0.1% per unit', from: '#7a5a2c', to: '#2a2213' },
  { title: 'Static Bloom', artist: 'Nia Fontaine', kind: 'Primary', price: '0.035 ETH', supply: '210 / 500 minted', royaltyShare: '0.2% per unit', from: '#3d5a4a', to: '#182420' },
  { title: 'Harmattan', artist: 'Kwame Osei', kind: 'Secondary', price: '0.048 ETH', supply: 'Resale · 1 of 750', royaltyShare: '0.13% per unit', from: '#5a3d5a', to: '#241826' },
  { title: 'Concrete & Silk (EP)', artist: 'Dana Whitfield', kind: 'Primary', price: '0.06 ETH', supply: '88 / 250 minted', royaltyShare: '0.4% per unit', from: '#8a6a26', to: '#3a2c10' },
  { title: 'Neon Alley', artist: 'Sam Okoye', kind: 'Secondary', price: '0.021 ETH', supply: 'Resale · 1 of 1,000', royaltyShare: '0.1% per unit', from: '#3a4a5a', to: '#181f26' },
]

export const marketplaceFees = {
  primary: '2.5% platform fee on primary sales',
  secondary: '1% protocol fee on secondary trades, plus up to 15% artist-set resale royalty',
}

export type StemListing = {
  title: string
  artist: string
  bpm: string
  license: 'One-time' | 'Per-stream'
  price: string
  from: string
  to: string
}

export const stemListings: StemListing[] = [
  { title: 'Undertow - Bass Stem', artist: 'Marlowe Reed', bpm: '128 BPM · Dm', license: 'One-time', price: '0.01 ETH', from: '#7a5a2c', to: '#2a2213' },
  { title: 'Static Bloom - Vocal Chop Pack', artist: 'Nia Fontaine', bpm: '96 BPM · F#m', license: 'Per-stream', price: '0.4% per stream', from: '#3d5a4a', to: '#182420' },
  { title: 'Harmattan - Perc Loop', artist: 'Kwame Osei', bpm: '112 BPM · Cm', license: 'One-time', price: '0.006 ETH', from: '#5a3d5a', to: '#241826' },
]

// ---------- Video content ----------

export type VideoItem = {
  title: string
  artist: string
  kind: 'Music Video' | 'Live Performance' | 'Short Clip'
  duration: string
  gated: 'None' | 'NFT' | 'Premium'
  from: string
  to: string
}

export const videoItems: VideoItem[] = [
  { title: 'Undertow (Official Video)', artist: 'Marlowe Reed', kind: 'Music Video', duration: '3:52', gated: 'None', from: '#7a5a2c', to: '#2a2213' },
  { title: 'Live at Low End Theory', artist: 'Marlowe Reed', kind: 'Live Performance', duration: '41:10', gated: 'NFT', from: '#3d5a4a', to: '#182420' },
  { title: 'Static Bloom - Behind the Scenes', artist: 'Nia Fontaine', kind: 'Short Clip', duration: '0:48', gated: 'None', from: '#5a3d5a', to: '#241826' },
  { title: 'Harmattan Sessions, Vol. 1', artist: 'Kwame Osei', kind: 'Live Performance', duration: '28:33', gated: 'Premium', from: '#8a6a26', to: '#3a2c10' },
  { title: 'Studio Diary #4', artist: 'Dana Whitfield', kind: 'Short Clip', duration: '0:56', gated: 'None', from: '#3a4a5a', to: '#181f26' },
  { title: 'Neon Alley (Visualizer)', artist: 'Sam Okoye', kind: 'Music Video', duration: '4:05', gated: 'NFT', from: '#6a3a3a', to: '#241414' },
]

// ---------- Listening parties + tipping ----------

export type ListeningParty = {
  artist: string
  title: string
  when: string
  nftRequired: boolean
}

export const listeningParties: ListeningParty[] = [
  { artist: 'Marlowe Reed', title: 'Undertow - first listen + Q&A', when: 'Fri, 8:00 PM', nftRequired: true },
  { artist: 'Nia Fontaine', title: 'Static Bloom - album breakdown', when: 'Sun, 6:00 PM', nftRequired: false },
]

export const tipPresets = ['5 SOUND', '10 SOUND', '25 SOUND']

// ---------- Richer artist analytics ----------

export const listenerDemographics = [
  { region: 'United States', pct: 34 },
  { region: 'Nigeria', pct: 21 },
  { region: 'United Kingdom', pct: 14 },
  { region: 'Ghana', pct: 11 },
  { region: 'Brazil', pct: 8 },
  { region: 'Other', pct: 12 },
]

export const nftHolderCount = '1,204 NFT holders'

export type EditorialPlacement = {
  playlist: string
  curator: string
  addedOn: string
  listensFromPlacement: string
}

export const editorialPlacements: EditorialPlacement[] = [
  { playlist: 'Now Rising', curator: 'SoundChain Editorial', addedOn: 'Sep 3', listensFromPlacement: '12.4K' },
  { playlist: 'Late Nights, Low End', curator: 'Nia Fontaine', addedOn: 'Aug 28', listensFromPlacement: '6.1K' },
  { playlist: 'Sub Bass Therapy', curator: 'Community', addedOn: 'Aug 19', listensFromPlacement: '3.8K' },
]
