# SoundChain  Web Mockup (Next.js)

A clickable UI mockup for SoundChain's web app, built with Next.js 14 (App Router),
TypeScript, and Tailwind CSS, implementing the features from the SoundChain
Technical & Business Plan.

## Routes

- `/` — Listener home: Discover hero, Now Rising rail, **Your Royalty Shares**
  (music NFTs held, with a fan-club-unlocked indicator), **Live Listening
  Parties**, library folder shelf, now-playing bar with tipping and an
  on-chain settlement ticker
- `/artist` — Artist Studio: stats, Artist Pro upsell, listens chart, royalty
  earnings panel (real 70/15/10/5 split), top listeners, **listener
  demographics**, upload, **playlist/editorial placements**, and a Your
  Masters ownership panel
- `/dao` — SOUND governance: balance/staked/quadratic-voting-weight/treasury
  stats, **SOUND staking panel**, proposals with **quadratic voting** weight
  and Vote For/Against actions, governance explainer
- `/marketplace` — **NFT Marketplace**: tabbed Music NFTs (primary mints +
  secondary resales, with fee disclosure) and **Stems & Remix** licensing
- `/videos` — **Video content**: music videos and live performances (some
  NFT- or Premium-gated) plus a short-clips row, all free to browse
- `/onboarding` — 4-step sign-up flow: account → wallet setup → plan
  selection (Free / Premium $5.99 / Family $12.99) → confirmation

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

> Note: written by hand against Next.js/Tailwind/lucide-react conventions but
> not run through `npm install` / a build in the environment it was generated
> in (no network access there). Run `npm run build` locally before treating
> it as production-ready — check especially that `ShoppingBag`, `Film`, and
> `Vote` all resolve from your installed `lucide-react` version.

## Structure

```
app/
  layout.tsx          Root layout, fonts (Fraunces + Inter), global background
  globals.css         Tailwind directives + royalty-pulse animation
  page.tsx            Listener route ("/")
  artist/page.tsx     Artist Studio route ("/artist")
  dao/page.tsx        SOUND DAO governance route ("/dao")
  marketplace/page.tsx  NFT + stems marketplace route ("/marketplace")
  videos/page.tsx     Video content route ("/videos")
  onboarding/page.tsx Sign-up flow route ("/onboarding")
components/
  AppShell.tsx        Shared rail + topbar + now-playing + bottom nav wrapper
  Rail.tsx            Left icon sidebar (desktop), route-aware active states
  BottomNav.tsx       Mobile bottom tab bar, replaces Rail below md
  Topbar.tsx          Listener/Artist/DAO mode switch, search, wallet chip
  Hero.tsx            Discover hero (listener)
  PlaylistRail.tsx    "Now Rising" horizontal scroll
  RoyaltyShares.tsx   Music NFTs held + royalty share % + fan-club badge
  ListeningParties.tsx  Upcoming live listening party events
  LibraryShelf.tsx    Playlist folder grid
  NowPlayingBar.tsx   Fixed bottom player + royalty ticker + Tip button
  TipButton.tsx       SOUND tip popover (client component)
  StatsStrip.tsx      Top 4 stat tiles (artist)
  ArtistProBanner.tsx Artist Pro ($9.99/mo) upsell banner (artist)
  ListensChart.tsx    Recharts area chart w/ Day/Week/Month toggle (artist)
  EarningsPanel.tsx   Real 70/15/10/5 royalty split + withdraw CTA (artist)
  Leaderboard.tsx     Top 10 listeners (artist)
  DemographicsPanel.tsx  Listener geography + NFT holder count (artist)
  EditorialPanel.tsx  Playlist/editorial placements (artist)
  UploadCards.tsx     Upload track / DJ mix entry points (artist)
  MastersPanel.tsx    Master ownership %, settlement chain, rights contract
  DaoStats.tsx        Balance / staked / quadratic voting weight / treasury
  StakingPanel.tsx    SOUND staking: staked amount, rewards, stake/unstake
  ProposalList.tsx    Proposals with quadratic voting weight + vote actions
  GovernanceInfo.tsx  Quadratic voting explainer + "new proposal" CTA
  MarketplaceView.tsx Tabbed Music NFTs / Stems & Remix marketplace (client)
  VideoGrid.tsx       Video cards with duration + NFT/Premium gating badges
  OnboardingFlow.tsx  4-step sign-up flow: account, wallet, plan, confirmation
lib/
  data.ts             All mock data in one place — swap for real API/contract calls later
```

## Design tokens (tailwind.config.ts)

| Token       | Hex       | Use                                   |
|-------------|-----------|----------------------------------------|
| `ink`       | `#14120F` | Base background                        |
| `surface`   | `#1E1B17` | Cards, panels                          |
| `surface-2` | `#252119` | Nested/inset surfaces                  |
| `hairline`  | `#2C2822` | Borders, dividers                      |
| `ivory`     | `#F2ECE1` | Primary text                           |
| `smoke`     | `#9C948A` | Secondary text                         |
| `bronze`    | `#C89B3C` | Brand accent — CTAs, active states     |
| `moss`      | `#6B8F71` | Reserved only for royalty/money states |

Fonts: **Fraunces** (serif, headlines/artist names) + **Inter** (sans, UI chrome),
loaded via `next/font/google` in `app/layout.tsx`.

## Responsiveness

Mobile-first with breakpoints at `sm` (640px), `md` (768px), and `lg` (1024px).
Below `md` the sidebar hides in favor of `BottomNav`; two-column dashboard
grids stack to one column until `lg`; stat strips drop from 4/3-up to 2/1-up;
type, padding, and card widths scale down throughout. Not manually tested in
an actual device/browser — verify before shipping.

## What's still a mock, not real functionality

- No backend, database, or real API — everything renders from `lib/data.ts`
- No real blockchain calls — wallet balances, staking, voting, minting, and
  tipping are styled UI with no wagmi/viem/contract wiring
- No real audio or video playback
- No payment processing (subscriptions, NFT purchases, stem licensing)
- Buttons (Vote, Mint, License, Tip, Stake, Withdraw, Upgrade) don't perform
  real actions

## Next steps to make this real

- Replace `lib/data.ts` with real data fetching (React Query + your API/GraphQL layer)
- Wire the Day/Week/Month toggle in `ListensChart.tsx` to actually swap datasets
- Add wallet connection (wagmi/viem + RainbowKit, or MegaETH's own SDK if available) behind the wallet chip in `Topbar.tsx`
- Connect `ProposalList.tsx`, `StakingPanel.tsx`, and `GovernanceInfo.tsx` to the actual governance/staking contracts, including real quadratic vote-weight calculation on-chain
- Connect `MarketplaceView.tsx` to the NFT contract (ERC-1155) and marketplace backend for real minting/buying/licensing
- Wire `TipButton.tsx` to an actual SOUND transfer transaction
- Pull `RoyaltyShares.tsx`, `DemographicsPanel.tsx`, and `EditorialPanel.tsx` from real contract reads / analytics pipelines rather than mock data
- Add real video hosting/playback (e.g., Livepeer per the plan) behind `VideoGrid.tsx`
- Add auth + route protection so `/artist` only renders for creator accounts
