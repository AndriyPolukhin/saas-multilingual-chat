'use client'

import { useSession } from 'next-auth/react'

const CheckoutButton = () => {
	const { data: session } = useSession()
	const createCheckoutSession = () => {
		if (!session) return
		// Push a document into firestore db

		// ... stripe extension on firebase will create a checkout session

		// redirect the user to the checkout page
	}
	return (
		<div className='flex flex-col space-y-2'>
			{/* IF Subscribed:  show me the user is subscribed */}
			<button
				onClick={() => createCheckoutSession()}
				className='mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer disabled:opacity-60'
			>
				Sign Up
			</button>
		</div>
	)
}

export default CheckoutButton
