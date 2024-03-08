import logoImage from '@logos/logo2.svg'
import Link from 'next/link'
import Image from 'next/image'
import { AspectRatio } from '@/components/ui/aspect-ratio'

const Logo = () => {
	return (
		<Link href='/' prefetch={false} className='overflow-hidden'>
			<div className='flex items-center w-72 h-14'>
				<AspectRatio
					ratio={16 / 9}
					className='flex items-center justify-center'
				>
					<Image
						priority
						src={logoImage}
						alt='logo'
						className='dark:filter dark:invert'
					/>
				</AspectRatio>
			</div>
		</Link>
	)
}

export default Logo
