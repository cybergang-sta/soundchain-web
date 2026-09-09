# SoundChain - Web Mockup (Next.js)

A clickable UI mockup for SoundChain's web app, built with Next.js 16 (App Router),
TypeScript, and Tailwind CSS. Three routes:

- `/` - Listener home (Discover hero, Now Rising rail, **Your Royalty Shares** -
  music NFTs the fan holds - library folder shelf, now-playing bar with an
  on-chain settlement ticker)
- `/artist` - Artist Studio (stats, listens chart, royalty earnings panel, top
  listeners, upload, and a **Your Masters** panel confirming on-chain ownership terms)
- `/dao` - SOUND token governance (your balance/voting power, treasury size,
  active proposals with live vote-share bars, "new proposal" CTA)
- `/onboarding` - 4-step sign-up flow: account → wallet setup → plan selection →
  confirmation. No sidebar/topbar, since the user has no account or wallet yet.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

> Note: this project was written by hand against Next.js/Tailwind conventions but has
> not been run through `npm install` / a build in the environment it was generated in
> (no network access there). Run `npm run build` locally to catch any straggling
> type or class-name issues before treating it as production-ready.

## Structure

```
app/
  layout.tsx          Root layout, fonts (Fraunces + Inter), global background
  globals.css         Tailwind directives + royalty-pulse animation
  page.tsx            Listener route ("/")
  artist/page.tsx     Artist Studio route ("/artist")
  dao/page.tsx        SOUND DAO governance route ("/dao")
  onboarding/page.tsx Sign-up flow route ("/onboarding")
components/
  AppShell.tsx        Shared rail + topbar + now-playing wrapper (3 modes)
  Rail.tsx            Left icon sidebar, route-aware active states
  Topbar.tsx          Listener/Artist/DAO mode switch, search, dual-token wallet chip
  Hero.tsx            Discover hero (listener)
  PlaylistRail.tsx    "Now Rising" horizontal scroll
  RoyaltyShares.tsx   Music NFTs the listener holds + their royalty share %
  LibraryShelf.tsx    Playlist folder grid
  NowPlayingBar.tsx   Fixed bottom player + on-chain royalty ticker (listener/DAO)
  StatsStrip.tsx      Top 4 stat tiles (artist)
  ListensChart.tsx    Recharts area chart w/ Day/Week/Month toggle (artist)
  EarningsPanel.tsx   Royalty earnings + split + withdraw CTA (artist)
  Leaderboard.tsx     Top 10 listeners (artist)
  UploadCards.tsx     Upload track / DJ mix entry points (artist)
  MastersPanel.tsx    Master ownership %, settlement chain, rights contract (artist)
  DaoStats.tsx        SOUND balance / voting power / treasury tiles (DAO)
  ProposalList.tsx    Governance proposals with vote-share bars (DAO)
  GovernanceInfo.tsx  Explainer + "new proposal" CTA (DAO)
  OnboardingFlow.tsx  4-step sign-up flow: account, wallet, plan, confirmation
lib/
  data.ts             All mock data in one place - swap for real API/contract calls later
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
| `bronze`    | `#C89B3C` | Brand accent - CTAs, active states     |
| `moss`      | `#6B8F71` | Reserved only for royalty/money states |

Fonts: **Fraunces** (serif, headlines/artist names) + **Inter** (sans, UI chrome),
loaded via `next/font/google` in `app/layout.tsx`.

## Next steps to make this real

- Replace `lib/data.ts` with real data fetching (React Query + your API/GraphQL layer)
- Wire the Day/Week/Month toggle in `ListensChart.tsx` to actually swap datasets
- Add wallet connection (wagmi/viem + RainbowKit, or MegaETH's own SDK if available) behind the wallet chip in `Topbar.tsx`
- Connect `ProposalList.tsx` and `GovernanceInfo.tsx` to the actual governance contract (proposal creation, on-chain voting, quorum/execution status)
- Pull `RoyaltyShares.tsx` from the fan's actual held NFTs (contract read) rather than mock data
- Add auth + route protection so `/artist` only renders for creator accounts
