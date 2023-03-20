import Footer from './footer'
import './globals.css'
import Header from './header'
import Provider from './provider'

export const metadata = {
	title: 'Twitter Clone',
	description: 'Twitter clone'
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<Provider>
					<Header />
					<main>{children}</main>
					<Footer />
				</Provider>
			</body>
		</html>
	)
}
