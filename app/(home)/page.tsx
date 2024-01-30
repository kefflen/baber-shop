/* eslint-disable quotes */
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import BookingItem from '../_components/booking-item'
import Header from '../_components/header'
import Search from './_components/search'

const Home = () => {
	return (
		<div className=''>
			<Header />
			<div className="px-5 pt-5">
				<h2>Ola, Miguel</h2>
				<p className='capitalize text-sm'>{format(new Date(), `EEEE, d 'de ' MMMM`, {
					locale: ptBR
				})}</p>

				<div className="px-5 mt-6">
					<Search />
				</div>
				<div className="px-5 mt-6">
					<h2 className='text-sm mb-3 uppercase text-gray-400 font-bold'>Agendamento</h2>
					<BookingItem />
				</div>
			</div>
		</div>)
}
 
export default Home