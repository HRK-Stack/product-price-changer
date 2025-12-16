import { prisma } from '@/lib/prisma'
import Image from 'next/image'
import Link from 'next/link'

export default async function PriceListPage() {
  const products = await prisma.product.findMany({
    where: { isActive: true },
    orderBy: { name: 'asc' },
  })

  return (
    <main className="min-h-screen bg-slate-100">
      {/* Top bar */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold text-slate-800">
              Product Price List
            </h1>
            <p className="text-xs text-slate-500">
              Latest updated prices
            </p>
          </div>

          <Link
            href="/login"
            className="text-sm font-medium text-white bg-slate-800 px-4 py-2 rounded-md hover:bg-slate-700"
          >
            Admin Login
          </Link>
        </div>
      </header>

      {/* Products */}
      <section className="max-w-5xl mx-auto px-4 py-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <div
              key={p.id}
              className="bg-white border border-slate-200 rounded-lg p-4 flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full h-36 bg-slate-100 rounded mb-3">
                {p.imageUrl && (
                  <Image
                    src={p.imageUrl}
                    alt={p.name}
                    fill
                    className="object-contain rounded"
                  />
                )}
              </div>

              {/* Name */}
              <h2 className="text-sm font-medium text-slate-800 mb-1">
                {p.name}
              </h2>

              {/* Price */}
              <div className="mt-auto text-lg font-semibold text-slate-900">
                ₹ {p.price.toString()}
              </div>
            </div>
          ))}

          {products.length === 0 && (
            <div className="col-span-full text-center text-sm text-slate-500 py-10">
              No products available.
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
