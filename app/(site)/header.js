import Link from 'next/link'
import LoginButton from '../components/auth/SignInButton'

const Header = () => {
	return (
		<header className='bg-stone-100 py-12'>
			<nav className='center'>
				<ul className='flex justify-center gap-8'>
					<li>
						<Link
							href={`/`}
							className='text-sm font-medium uppercase'>
							Home
						</Link>
					</li>
					<li>
						<Link
							href={`/users`}
							className='text-sm font-medium uppercase'>
							Users
						</Link>
					</li>
					<ul className='ml-auto'>
						<li>
							<LoginButton />
						</li>
					</ul>
				</ul>
			</nav>
		</header>
	)
}

export default Header
