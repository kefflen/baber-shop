'use server'

import { db } from '@/app/_lib/prisma'
import { th } from 'date-fns/locale'
import { revalidatePath } from 'next/cache'

interface SaveBookingParams {
  barbershopId: string;
  serviceId: string;
  userEmail: string;
  date: Date;
}

export const saveBooking = async (params: SaveBookingParams) => {
  const user = await db.user.findUnique({
    where: {
      email: params.userEmail,
    },
  })

  if (!user) {
    throw new Error('User not found')
  }
  
  await db.booking.create({
    data: {
      serviceId: params.serviceId,
      date: params.date,
      userId: user?.id,
      barbershopId: params.barbershopId,
    },
  })

  revalidatePath('/')
  revalidatePath('/bookings')
}
