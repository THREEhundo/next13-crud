import { getUsers } from '@/lib/prisma/users'
import Link from 'next/link'
import React from 'react'

const Users = async () => {
	const { users } = await getUsers()

	return (
		<section className='fixed h-full w-1/4 bg-stone-800'>
			<div className='center py-4'>
				<h2 className='mb-4 text-xl font-medium text-white'></h2>
				<ul className='flex flex-col text-sm text-white list-none gap-1 list-inside'>
					{users?.map(user => (
						<li key={user.id} className='text-base'>
							<Link href={`/users/${user.id}`}>{user.name}</Link>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}

export default Users
