export const dynamic = 'force-dynamic'

import { prisma } from '@/lib/prisma'
import Image from 'next/image'
import { PriceInput } from './PriceInput'
import { AddProduct } from './AddProduct'

// Infer Product type from prisma query
type Product = Awaited<ReturnType<typeof prisma.product.findMany>>[number]

export default async function AdminProducts() {
  // products is strongly typed
  const products: Product[] = await prisma.product.findMany({
    orderBy: { name: 'asc' },
  })

  return (
    <main className="min-h-screen bg-slate-100">
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Header */}
        <header className="mb-6">
          <h1 className="text-xl font-semibold text-slate-900">
            Product Management
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            Update prices or add new products
          </p>
        </header>

        {/* Add Product */}
        <section className="mb-6">
          <AddProduct />
        </section>

        {/* Desktop Table */}
        <section className="hidden sm:block bg-white border border-slate-300 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-slate-100 border-b border-slate-300">
              <tr>
                <th className="text-left px-4 py-3 text-sm font-semibold text-slate-700">
                  Product
                </th>
                <th className="text-left px-4 py-3 text-sm font-semibold text-slate-700">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr
                  key={p.id}
                  className="border-t border-slate-200 hover:bg-slate-50"
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 relative bg-slate-200 rounded-md">
                        {p.imageUrl && (
                          <Image
                            src={p.imageUrl}
                            alt={p.name}
                            fill
                            className="object-contain rounded-md"
                          />
                        )}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-slate-900">
                          {p.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <PriceInput id={p.id} price={p.price.toString()} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Mobile Cards */}
        <section className="grid gap-5 sm:hidden">
          {products.map((p) => (
            <div
              key={p.id}
              className="bg-white border border-slate-300 rounded-lg p-4"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 relative bg-slate-200 rounded-md">
                  {p.imageUrl && (
                    <Image
                      src={p.imageUrl}
                      alt={p.name}
                      fill
                      className="object-contain rounded-md"
                    />
                  )}
                </div>
                <div>
                  <h2 className="text-sm font-semibold text-slate-900">
                    {p.name}
                  </h2>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Edit price below
                  </p>
                </div>
              </div>

              <PriceInput id={p.id} price={p.price.toString()} />
            </div>
          ))}
        </section>
      </div>
    </main>
  )
}
