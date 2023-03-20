import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<section>
			<div className='center py-4'>
				<h1 className='text-2xl font-semibold tracking-tight'>
					Home Page
				</h1>
			</div>
		</section>
	)
}
