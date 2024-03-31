import ChatList from '@/components/ChatList'

type Props = {
	params: {}
	searchParams: {
		error: string
	}
}

const ChatsPage = ({ searchParams: { error } }: Props) => {
	return (
		<div>
			{/* Chat Permission chat */}

			{/* Chat List */}
			<h3>Chats</h3>
			<ChatList />
		</div>
	)
}

export default ChatsPage
