'use client'

import { MessageSquarePlusIcon } from 'lucide-react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { useSubscriptionStore } from '@/store/store'
import LoadingSpinner from './LoadingSpinner'
import { useToast } from './ui/use-toast'
import { v4 as uuidv4 } from 'uuid'

const CreateChatButton = ({ isLarge }: { isLarge?: boolean }) => {
	const { data: session } = useSession()
	const router = useRouter()
	const [loading, setLoading] = useState(false)
	const { toast } = useToast()
	const subscription = useSubscriptionStore((state) => state.subscription)

	const createNewChat = async () => {
		if (!session?.user.id) return

		setLoading(true)
		toast({
			title: 'Creating new chat...',
			description: 'Hold tight while we create your new chat...',
			duration: 3000,
		})

		// TODO Check if user is pro and limit them creating a new chat
		// ....
		// ----

		const chatId = uuidv4()
		router.push(`/chat/${chatId}`)
	}
	return (
		<Button onClick={createNewChat} variant={'ghost'}>
			{loading ? <LoadingSpinner /> : 'Create a New Chat'}
			{/* <MessageSquarePlusIcon /> */}
		</Button>
	)
}

export default CreateChatButton
