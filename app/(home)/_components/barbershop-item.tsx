'use client'
import { Badge } from '@/app/_components/ui/badge'
import { Button } from '@/app/_components/ui/button'
import { Card, CardContent } from '@/app/_components/ui/card'
import { Barbershop } from '@prisma/client'
import { StarIcon } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

type babershopItemProps = {
  barbershop: Barbershop
}

const BarbershopItem = ({ barbershop }: babershopItemProps) => {
  const router = useRouter()

  const handleBookingClick = () => {
    router.push(`/barbershops/${barbershop.id}`)
  }

  return (
    <Card className="min-w-[167px] max-w-[167] roudned-2xl w-fit">
      <CardContent className="p-1">
        <div className="p-1 relative w-full h-[159px]">
          <Badge
            className="absolute top-2 left-2 z-50 flex items-center justify-center gap-1 opacity-90"
            variant="secondary"
          >
            <StarIcon size={12} className="fill-primary text-primary" />
            <span>5,0</span>
          </Badge>
          <Image
            alt={barbershop.name}
            src={barbershop.imageUrl}
            fill
            className="rounded-t-2xl"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="px-2 pb-3">
          <h2 className="font-bold mt-2 overflow-hidden text-ellipsis text-nowrap">
            {barbershop.name}
          </h2>
          <p className="text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap">
            {barbershop.address}
          </p>
          <Button
            variant={'secondary'}
            className="w-full mt-3"
            onClick={handleBookingClick}
          >
            Reservar
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default BarbershopItem
