import Image from 'next/image'
import Tweet from './tweet'

const User = ({ user }) => {
	console.log(user)
	return (
		<section className='m-4 py-4'>
			<div className='center'>
				<div className='relative h-40 w-40 rounded-full'>
					<Image
						src={user?.image}
						alt={user?.name}
						className=' rounded-md object-contain'
						fill
						priority
						sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
					/>
				</div>
				<h1 className='text-xl font-bold'>{user?.name}</h1>
				<p className='text-sm text-stone-400'>{user?.email}</p>
			</div>
			<div className='grow'>
				<h2 className='text-2xl font-semibold tracking-tight'>
					<ul>
						{user.tweets.map(tweet => (
							<Tweet key={tweet.id} tweet={tweet} />
						))}
					</ul>
				</h2>
			</div>
		</section>
	)
}

export default User
