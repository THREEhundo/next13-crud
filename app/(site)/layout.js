import Footer from './footer'
import './globals.css'
import Header from './header'

export const metadata = {
	title: 'Twitter Clone',
	description: 'Twitter clone'
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	)
}
