import { likeTweet } from '@/lib/prisma/tweets'
import { NextResponse } from 'next/server'

//const handler = async (req, res) => {
//	if (req.method === 'PATCH') {
//		try {
//			const { tweetId } = req.query
//
//			const { tweet, error } = await likeTweet({ tweetId })
//			if (error) throw new Error(error)
//
//			return res.status(200).json({ tweet })
//		} catch (error) {
//			return res.status(500).json({ error: error.message })
//		}
//	}
//
//	res.setHeader('Allow', ['PATCH'])
//	res.status(425).end(`Method ${req.method} is not allowed.`)
//}
//
//export default handler

export async function PATCH(request, { params }) {
	try {
		const { tweetId } = params

		const { tweet, error } = await likeTweet({ tweetId })
		if (error) throw new Error(error)

		return NextResponse.json({ tweet }, { status: 201 })
	} catch (error) {
		return NextResposne.json({ error: error.message }, { status: 500 })
	}
}
