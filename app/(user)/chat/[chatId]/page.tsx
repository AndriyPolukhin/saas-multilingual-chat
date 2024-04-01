import { authOptions } from '@/auth'
import ChatInput from '@/components/ChatInput'
import { getServerSession } from 'next-auth'

type Props = {
	params: {
		chatId: string
	}
}

const ChatPage = async ({ params: { chatId } }: Props) => {
	const session = await getServerSession(authOptions)

	return (
		<div>
			{/* Admin Controls */}
			{/* Chat Members Badge */}
			{/* Chat Messages */}
			{/* Chat Input */}
			<ChatInput chatId={chatId} />
		</div>
	)
}

export default ChatPage
