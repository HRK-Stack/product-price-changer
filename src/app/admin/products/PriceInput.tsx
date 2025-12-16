'use client'

import { useState } from 'react'
import { updatePrice } from './actions'

export function PriceInput({
  id,
  price,
}: {
  id: string
  price: string
}) {
  const [value, setValue] = useState(price)

  return (
    <form action={updatePrice} className="flex items-center gap-3">
      <input type="hidden" name="id" value={id} />

      {/* Price field */}
      <div className="relative">
        <span className="absolute left-2 top-1/2 -translate-y-1/2 text-sm text-slate-600">
          ₹
        </span>
        <input
          name="price"
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-28 pl-6 pr-2 py-2 border border-slate-400 rounded-md text-sm text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-600"
        />
      </div>

      {/* Save button */}
      <button
        type="submit"
        className="px-4 py-2 rounded-md bg-slate-800 text-white text-sm font-medium hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-600"
      >
        Save
      </button>
    </form>
  )
}
