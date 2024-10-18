import React from 'react'

export default function BalanceCard({ balance }) {
  return (
    <div className="bg-[#F9FAFB] flex lg:max-w-xs flex-col px-4 py-4">
      <dt className="text-base leading-7 text-gray-600">Balance</dt>
      <dd
        className={`order-first text-xl font-semibold tracking-tight sm:text-3xl ${balance < 0 ? 'text-red-600' : 'text-gray-700'
          }`}
      >
        BDT {balance}
      </dd>
    </div>

  )
}
