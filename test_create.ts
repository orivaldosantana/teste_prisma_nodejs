import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const user = await prisma.sensor.create({
    data: {
      location: 'casa',
      name: 'Temperatura',
      code: 'TEMP01'
    }
  })
  console.log(user)
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
