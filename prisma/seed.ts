import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  // Create default strategy if it doesn't exist
  const defaultStrategy = await prisma.strategy.upsert({
    where: { id: '1' },
    update: {},
    create: {
      id: '1',
      name: 'Default Strategy',
    },
  })
  
  console.log('Created/Updated default strategy:', defaultStrategy)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  }) 