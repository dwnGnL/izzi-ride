import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

import Content from './content'

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

export const metadata: Metadata = {
    title: 'iZZi RIDE',
    description:
        'Do you often drive to another cities and states by own car or public transportation? Then save on it with iZZi RIDE',
    keywords: 'ride, city, cities, state, states, country, countries, izzi ride, easy ride',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <body className={clashDisplayFont.className}>
                <Content>{children}</Content>
            </body>
        </html>
    )
}
