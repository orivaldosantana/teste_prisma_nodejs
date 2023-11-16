import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const sensor = await prisma.sensor.create({
    data: {
      location: 'casa',
      name: 'Umidade do ar',
      code: 'UMI01'
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
