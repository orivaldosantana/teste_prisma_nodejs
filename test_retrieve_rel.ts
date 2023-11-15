import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const sensorsWithReadins = await prisma.sensor.findMany({
    include: {
      readings: true
    }
  })
  console.dir(sensorsWithReadins, { depth: null })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async e => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
