'use client'
import {
  CalendarIcon,
  HomeIcon,
  LogInIcon,
  LogOutIcon,
  UserIcon
} from 'lucide-react'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { SheetHeader } from './ui/sheet'

const Sidemenu = () => {
  const { data } = useSession()
  const handleLogoutClick = () => signOut()
  const handleLoginClick = () => signIn()

  return (
    <>
      <SheetHeader className="p-5 text-left border-b border-solid border-secondary">
        <h1>Menu</h1>
      </SheetHeader>
      {data?.user ? (
        <div className="flex justify-between items-center px-5 py-6">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage
                src={data.user.image ?? ''}
                alt={data.user.name ?? ''}
              />
              <AvatarFallback>{data.user.name?.charAt(0)}</AvatarFallback>
            </Avatar>
            <h2>{data.user.name}</h2>
          </div>
          <Button
            variant={'secondary'}
            size={'icon'}
            onClick={handleLogoutClick}
          >
            <LogOutIcon size={18} />
          </Button>
        </div>
      ) : (
        <div className="flex flex-col px-5 py-6 gap-2">
          <div className="flex items-center">
            <UserIcon size={32} />
            <h2 className="font-bold">Ola, faça seu login!</h2>
          </div>
          <Button
            variant={'secondary'}
            className="w-full flex justify-start"
            onClick={handleLoginClick}
          >
            <LogInIcon className="mr-1" size={18} />
            Fazer login
          </Button>
        </div>
      )}

      <div className="flex flex-col gap-3 px-1">
        <Button
          variant={'outline'}
          className="w-full justify-start items-center gap-1"
          asChild
        >
          <Link href="/">
            <HomeIcon size={18} />
            Inicio
          </Link>
        </Button>
        {data?.user && (
          <Button
            variant={'outline'}
            className="w-full justify-start items-center gap-1"
            asChild
          >
            <Link href="/bookings">
              <CalendarIcon size={18} />
              Agendamentos
            </Link>
          </Button>
        )}
      </div>
    </>
  )
}

export default Sidemenu
