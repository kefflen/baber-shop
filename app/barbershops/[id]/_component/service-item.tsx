import { Button } from '@/app/_components/ui/button'
import { Card, CardContent } from '@/app/_components/ui/card'
import { Service } from '@prisma/client'
import Image from 'next/image'

type serviceItemProps = {
  service: Service
}
const ServiceItem = ({ service }: serviceItemProps) => {
  return (
    <Card>
      <CardContent className='p-3'>
        <div className="flex gap-4 items-center">
          <div className="relative h-[110px] w-[110px]">
            <Image
              src={service.imageUrl}
              alt={service.name}
              fill
              style={{objectFit: 'contain'}}
              className='rounded-lg'
            />
          </div>
          <div className="flex flex-col w-full">
            <h2 className='font-bold'>{service.name}</h2>
            <p className="text-sm text-gray-400">
              {service.description}
            </p>
            <div className="flex items-center justify-between mt-3">
              <p className='text-primary font-bold text-sm'>
                {
                new Intl.NumberFormat(
                  'pt-BR',
                  { style: 'currency', currency: 'BRL' }
                  ).format(Number(service.price))
                }
              </p>
              <Button variant={'secondary'}>
                Reservar
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ServiceItem