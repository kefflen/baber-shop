import { db } from '@/app/_lib/prisma'
import BarbershopInfo from './_component/barbershop-info'
import ServiceItem from './_component/service-item'

type barbershopDetailPageProps = {
  params: {
    id: string
  }
}

//TODO: Add services and information button that are on design
const BarbershopDetailPage = async ({ params }: barbershopDetailPageProps) => {
  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id
    },
    include: {
      services: true
    }
  })

  if (!barbershop) {
    //TODO: Return to homepage
    return null
  }

  return (
    <div className="">
      <BarbershopInfo barbershop={barbershop} />
      <div className="p-5 flex gap-3 flex-col">
        {barbershop.services.map((service) => (
          <ServiceItem key={service.id} service={service}/>
        ))}
      </div>
    </div>
  )
}

export default BarbershopDetailPage
