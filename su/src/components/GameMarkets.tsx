'use client'

import type { GameMarkets, MarketOutcome } from '@azuro-org/sdk'
import { OutcomeButton } from '@/components'


type GameMarketsProps = {
  markets: GameMarkets
}

export function GameMarkets(props: GameMarketsProps) {
  const { markets } = props

  return (
    <div className="max-w-[600px] mx-auto mt-5 space-y-6 text-text">
      {
        markets.map(({ name, description, outcomeRows }) => (
          <div key={name} className="">
            <div className="mb-2 text-lg font-semibold mb-4 text-center">{name}</div>
            <div className="space-y-1">
              {
                outcomeRows.map((outcomes, index) => (
                    <div key={index} className="flex gap-2 w-full justify-around">
                      {
                        outcomes.map((outcome) => (
                          <OutcomeButton
                            key={outcome.selectionName}
                            outcome={outcome}
                          />
                        ))
                      }
                    </div>
                ))
              }
            </div>
          </div>
        ))
      }
    </div>
  )
}
