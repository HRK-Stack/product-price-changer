'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function updatePrice(formData: FormData) {
  const id = formData.get('id') as string
  const price = Number(formData.get('price'))

  if (!id || isNaN(price)) return

  await prisma.product.update({
    where: { id },
    data: { price },
  })

  revalidatePath('/admin/products')
}

export async function addProduct(formData: FormData) {
  const name = formData.get('name') as string
  const price = Number(formData.get('price'))
  const imageUrl = formData.get('imageUrl') as string

  if (!name || isNaN(price)) return

  await prisma.product.create({
    data: {
      name,
      price,
      imageUrl,
    },
  })

  revalidatePath('/admin/products')
}
