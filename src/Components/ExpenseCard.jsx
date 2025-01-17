import React from 'react'

export default function ExpenseCard({totalExpenses}) {
  return (
    <div className="bg-[#F9FAFB] flex lg:max-w-xs flex-col px-4 py-4">
    <dt className="text-base leading-7 text-gray-600">Total Expense</dt>
    <dd className="order-first text-xl font-semibold tracking-tight text-gray-700 sm:text-3xl">BDT {totalExpenses}</dd>
  </div>
  )
}
