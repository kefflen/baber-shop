/* eslint-disable quotes */
import { format } from 'date-fns'
import Header from '../_components/header'

const Home = () => {
	return (
		<div className=''>
			<Header />
			<div className="px-5 pt-5">
				<h2>Ola, Miguel</h2>
				<p>{format(new Date(), `EEEE, d 'de ' MMMM`)}</p>
			</div>
		</div>)
}
 
export default Home