'use client'
import { Button } from '@/app/_components/ui/button'
import { Barbershop } from '@prisma/client'
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

type barbershopDetailPageProps = {
  barbershop: Barbershop
}

const BarbershopInfo = async ({ barbershop }: barbershopDetailPageProps) => {
  const router = useRouter()

  const handleBackButton = () => {
    router.replace('/')
  }

  return (
    <div className="">
      <div className="h-[250px] w-full relative">
        <Button
          size={'icon'}
          variant={'outline'}
          className="absolute top-4 left-4 z-50"
          onClick={handleBackButton}
        >
          <ChevronLeftIcon />
        </Button>
        <Button
          size={'icon'}
          variant={'outline'}
          className="absolute top-4 right-4 z-50"
        >
          <MenuIcon />
        </Button>
        <Image
          src={barbershop.imageUrl}
          alt={barbershop.name}
          fill
          style={{ objectFit: 'cover' }}
          className="opacity-75"
        />
      </div>
      <div className="px-5 py-3 pb-6 border-b border-solid border-secondary">
        <h1 className="text-xl font-bold">{barbershop.name}</h1>
        <div className="flex items-center gap-2 mt-1">
          <MapPinIcon className="text-primary" size={18} />
          <p className="text-sm">{barbershop.address}</p>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <StarIcon className="text-primary" size={18} />
          <p className="text-sm">5,9 (899 avaliações)</p>
        </div>
      </div>
    </div>
  )
}

export default BarbershopInfo
