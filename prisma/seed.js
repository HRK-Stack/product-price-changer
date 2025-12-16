import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Optional: clear existing data to avoid duplicates
  await prisma.product.deleteMany()
  await prisma.admin.deleteMany()

  // Admin
  await prisma.admin.create({
    data: {
      username: 'admin',
      password: 'admin123',
    },
  })

  // Products with images
  await prisma.product.createMany({
    data: [
      {
        name: 'Gift Paper Wrapping Sheet',
        price: 40,
        imageUrl: '/images/prod1.jpg',
      },
      {
        name: 'Abro Tape',
        price: 25,
        imageUrl: '/images/prod2.jpg',
      },
      {
        name: 'A3 Size Color Paper',
        price: 180,
        imageUrl: '/images/prod3.jpg',
      },
      {
        name: 'Glitter Paper',
        price: 90,
        imageUrl: '/images/prod4.jpg',
      },
    ],
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
