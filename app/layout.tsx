import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import { ThemeProvider } from '@/components/ThemeProvider'
import ClientProvider from '@/components/ClientProviders'
import FirebaseAuthProvider from '@/components/FirebaseAuthProvider'

export const metadata: Metadata = {
	title: 'MUltilingual Chat',
	description:
		'Multilingujal chat app that translates the messages on the fly into the language you choose',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<ClientProvider>
			<html lang='en'>
				<body className='flex flex-col min-h-screen'>
					<FirebaseAuthProvider>
						<ThemeProvider
							attribute='class'
							defaultTheme='system'
							enableSystem
							disableTransitionOnChange
						>
							<Header />
							{children}
						</ThemeProvider>
					</FirebaseAuthProvider>
				</body>
			</html>
		</ClientProvider>
	)
}
