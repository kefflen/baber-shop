import { MenuIcon } from 'lucide-react'
import Image from 'next/image'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'

const Header = () => {
  return (
    <Card>
      <CardContent className="px-5 py-8 justify-between flex items-center">
        <Image src="/logo.png" alt="FSW barber" width={120} height={22} />
        <Button variant={'outline'} size={'icon'}>
          <MenuIcon size={18} />
        </Button>
      </CardContent>
    </Card>
  )
}

export default Header
