'use client'

import { addProduct } from './actions'

export function AddProduct() {
  return (
    <form
      action={addProduct}
      className="bg-white border border-slate-300 rounded-lg p-4 mb-6 grid gap-4 sm:grid-cols-4"
    >
      {/* Product name */}
      <div className="flex flex-col gap-1">
        <label className="text-xs font-medium text-slate-700">
          Product Name
        </label>
        <input
          name="name"
          placeholder="e.g. A4 Color Paper"
          className="border border-slate-400 rounded px-3 py-2 text-sm text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-600"
        />
      </div>

      {/* Price */}
      <div className="flex flex-col gap-1">
        <label className="text-xs font-medium text-slate-700">
          Price (₹)
        </label>
        <input
          name="price"
          type="number"
          placeholder="e.g. 120"
          className="border border-slate-400 rounded px-3 py-2 text-sm text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-600"
        />
      </div>

      {/* Image path */}
      <div className="flex flex-col gap-1">
        <label className="text-xs font-medium text-slate-700">
          Image Path
        </label>
        <input
          name="imageUrl"
          placeholder="/images/prod1/image.jpg"
          className="border border-slate-400 rounded px-3 py-2 text-sm text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-600"
        />
      </div>

      {/* Submit */}
      <div className="flex items-end">
        <button
          type="submit"
          className="w-full bg-slate-800 text-white rounded-md px-4 py-2 text-sm font-medium hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-600"
        >
          Add Product
        </button>
      </div>
    </form>
  )
}
