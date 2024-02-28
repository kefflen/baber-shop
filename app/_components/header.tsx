'use client'
import { MenuIcon } from 'lucide-react'
import Image from 'next/image'
import Sidemenu from './sidemenu'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'

const Header = () => {
  return (
    <Card>
      <CardContent className="px-5 py-8 justify-between flex items-center">
        <Image src="/logo.png" alt="FSW barber" width={120} height={22} />
        <Sheet>
          <SheetTrigger asChild>
            <Button variant={'outline'} size={'icon'}>
              <MenuIcon size={18} />
            </Button>
          </SheetTrigger>

          <SheetContent className="p-0">
            <Sidemenu />
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  )
}

export default Header
