'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Check } from 'lucide-react'

type Tier = {
  id: string
  name: string
  price: string
  tagline: string
  perks: string[]
}

const tiers: Tier[] = [
  {
    id: 'listener',
    name: 'Listener',
    price: 'Free',
    tagline: 'Stream with ads, follow artists',
    perks: ['Standard audio quality', 'Ad-supported', 'Follow artists & curators'],
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '$9.99/mo',
    tagline: 'Ad-free, direct artist support',
    perks: ['Ad-free, lossless streaming', 'Royalties settled per play', 'Offline listening'],
  },
  {
    id: 'founding',
    name: 'Founding Fan',
    price: '$19.99/mo',
    tagline: 'Everything, plus governance',
    perks: [
      'Everything in Premium',
      'Monthly SOUND token airdrop',
      'Vote on DAO proposals',
      'Early access to royalty-share NFT drops',
    ],
  },
]

const steps = ['Account', 'Wallet', 'Plan', 'Done']

export default function OnboardingFlow() {
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [walletChoice, setWalletChoice] = useState<'create' | 'connect' | null>(null)
  const [tier, setTier] = useState<string | null>(null)

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1))
  const back = () => setStep((s) => Math.max(s - 1, 0))

  const canContinue =
    (step === 0 && email.length > 3 && password.length >= 6) ||
    (step === 1 && walletChoice !== null) ||
    (step === 2 && tier !== null)

  const inputClass =
    'w-full rounded-[10px] border border-hairline bg-surface-2 px-[14px] py-[10px] text-[13.5px] text-ivory placeholder:text-smoke focus:outline-none focus:ring-1 focus:ring-bronze'

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[480px] flex-col justify-center px-6 py-16">
      <div className="mb-10 flex items-center justify-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-gradient-to-br from-bronze to-[#8a6a26] font-serif text-[14px] font-semibold text-ink">
          S
        </div>
        <span className="font-serif text-[17px]">SoundChain</span>
      </div>

      <div className="mb-10 flex items-center justify-center">
        {steps.map((label, i) => (
          <div key={label} className="flex items-center">
            <div className="flex flex-col items-center gap-[6px]">
              <div
                className={`flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-semibold ${
                  i < step ? 'bg-moss text-ink' : i === step ? 'bg-bronze text-ink' : 'bg-surface-2 text-smoke'
                }`}
              >
                {i < step ? <Check size={13} /> : i + 1}
              </div>
              <span className={`text-[11px] ${i === step ? 'text-ivory' : 'text-smoke'}`}>{label}</span>
            </div>
            {i < steps.length - 1 && <div className="mx-[10px] mb-[18px] h-px w-8 bg-hairline" />}
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-hairline bg-surface p-8">
        {step === 0 && (
          <div>
            <h1 className="mb-2 font-serif text-[24px] font-normal">Create your account</h1>
            <p className="mb-6 text-[13.5px] text-smoke">Takes about a minute. No crypto experience needed.</p>

            <label className="mb-[6px] block text-[12px] text-smoke">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="you@example.com"
              className={`mb-4 ${inputClass}`}
            />

            <label className="mb-[6px] block text-[12px] text-smoke">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="At least 6 characters"
              className={inputClass}
            />

            <p className="mt-5 text-center text-[12.5px] text-smoke">
              Already have an account? <span className="text-bronze">Log in</span>
            </p>
          </div>
        )}

        {step === 1 && (
          <div>
            <h1 className="mb-2 font-serif text-[24px] font-normal">Set up your wallet</h1>
            <p className="mb-6 text-[13.5px] text-smoke">
              This is where your royalties and SOUND tokens will live. You can change this later.
            </p>

            <button
              onClick={() => setWalletChoice('create')}
              className={`mb-3 w-full rounded-xl border p-4 text-left transition-colors ${
                walletChoice === 'create' ? 'border-bronze bg-bronze/5' : 'border-hairline hover:border-smoke'
              }`}
            >
              <div className="mb-1 text-[14px] font-semibold">Create a wallet for me</div>
              <div className="text-[12.5px] text-smoke">
                Recommended - no seed phrases to manage. You can export it anytime.
              </div>
            </button>

            <button
              onClick={() => setWalletChoice('connect')}
              className={`w-full rounded-xl border p-4 text-left transition-colors ${
                walletChoice === 'connect' ? 'border-bronze bg-bronze/5' : 'border-hairline hover:border-smoke'
              }`}
            >
              <div className="mb-1 text-[14px] font-semibold">Connect an existing wallet</div>
              <div className="text-[12.5px] text-smoke">MetaMask, Rainbow, Coinbase Wallet, or WalletConnect.</div>
            </button>
          </div>
        )}

        {step === 2 && (
          <div>
            <h1 className="mb-2 font-serif text-[24px] font-normal">Choose your plan</h1>
            <p className="mb-6 text-[13.5px] text-smoke">You can upgrade or cancel anytime from your wallet.</p>

            <div className="flex flex-col gap-3">
              {tiers.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTier(t.id)}
                  className={`rounded-xl border p-4 text-left transition-colors ${
                    tier === t.id ? 'border-bronze bg-bronze/5' : 'border-hairline hover:border-smoke'
                  }`}
                >
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-[14px] font-semibold">{t.name}</span>
                    <span className="text-[13px] font-semibold text-bronze">{t.price}</span>
                  </div>
                  <div className="mb-2 text-[12.5px] text-smoke">{t.tagline}</div>
                  <ul className="flex flex-col gap-1">
                    {t.perks.map((perk) => (
                      <li key={perk} className="flex items-center gap-2 text-[12px] text-smoke">
                        <Check size={12} className="flex-shrink-0 text-moss" /> {perk}
                      </li>
                    ))}
                  </ul>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="text-center">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-moss/10">
              <Check size={26} className="text-moss" />
            </div>
            <h1 className="mb-2 font-serif text-[24px] font-normal">You&rsquo;re all set</h1>
            <p className="mb-6 text-[13.5px] text-smoke">Your account and wallet are ready.</p>

            <div className="mb-6 flex flex-col gap-3 rounded-xl border border-hairline bg-surface-2 p-4 text-left">
              <div className="flex items-center justify-between text-[13px]">
                <span className="text-smoke">Email</span>
                <span className="font-semibold">{email || 'you@example.com'}</span>
              </div>
              <div className="flex items-center justify-between text-[13px]">
                <span className="text-smoke">Wallet</span>
                <span className="font-semibold">
                  {walletChoice === 'connect' ? 'Connected · 0x4F2a…931D' : 'Created · 0x4F2a…931D'}
                </span>
              </div>
              <div className="flex items-center justify-between text-[13px]">
                <span className="text-smoke">Plan</span>
                <span className="font-semibold">{tiers.find((t) => t.id === tier)?.name ?? 'Listener'}</span>
              </div>
            </div>

            <button
              onClick={() => router.push('/')}
              className="w-full rounded-[10px] bg-bronze py-3 text-[13.5px] font-semibold text-ink"
            >
              Enter SoundChain
            </button>
          </div>
        )}
      </div>

      {step < 3 && (
        <div className="mt-5 flex items-center justify-between">
          <button
            onClick={back}
            disabled={step === 0}
            className={`text-[13px] ${step === 0 ? 'text-transparent' : 'text-smoke hover:text-ivory'}`}
          >
            Back
          </button>
          <button
            onClick={next}
            disabled={!canContinue}
            className={`rounded-[10px] px-6 py-[10px] text-[13.5px] font-semibold transition-colors ${
              canContinue ? 'bg-bronze text-ink' : 'bg-surface-2 text-smoke'
            }`}
          >
            Continue
          </button>
        </div>
      )}
    </div>
  )
}
