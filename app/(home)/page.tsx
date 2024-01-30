/* eslint-disable quotes */
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
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
			</div>
		</div>)
}
 
export default Home