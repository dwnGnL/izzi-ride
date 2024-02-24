import type { AppProps } from 'next/app'
import Layout from './layout'

import localFont from 'next/font/local'

const clashDisplayFont = localFont({
	src: [
		{
			path: '../../public/fonts/ClashDisplay/ClashDisplay-Extralight.woff2',
			weight: '100',
			style: 'normal',
		},
		{
			path: '../../public/fonts/ClashDisplay/ClashDisplay-Light.woff2',
			weight: '300',
			style: 'normal',
		},
		{
			path: '../../public/fonts/ClashDisplay/ClashDisplay-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../public/fonts/ClashDisplay/ClashDisplay-Medium.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../../public/fonts/ClashDisplay/ClashDisplay-Semibold.woff2',
			weight: '600',
			style: 'normal',
		},
		{
			path: '../../public/fonts/ClashDisplay/ClashDisplay-Bold.woff2',
			weight: '700',
			style: 'normal',
		},
	],
})

import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<style jsx global>{`
				body {
					font-family: ${clashDisplayFont.style.fontFamily};
				}
			`}</style>

			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	)
}
