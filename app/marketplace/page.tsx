import AppShell from '@/components/AppShell'
import MarketplaceView from '@/components/MarketplaceView'

export default function MarketplacePage() {
  return (
    <AppShell mode="marketplace">
      <div className="mb-6">
        <h1 className="mb-1 font-serif text-[22px] font-normal md:text-[26px]">Marketplace</h1>
        <p className="text-[13px] text-smoke">
          Buy fractional royalty-share NFTs, or license stems and samples directly from artists.
        </p>
      </div>
      <MarketplaceView />
    </AppShell>
  )
}
