import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const sensor = await prisma.sensor.create({
    data: {
      location: 'casa',
      code: 'LDR01',
      name: 'iluminação',
      readings: {
        create: {
          value: 2300
        }
      }
    }
  })
  console.log(sensor)
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
