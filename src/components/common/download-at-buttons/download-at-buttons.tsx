import Link from 'next/link'
import Image from 'next/image'

import AppStoreDark from '@public/images/common/app-store-dark.svg'
import AppStoreLight from '@public/images/common/app-store-light.svg'

import GooglePlayDark from '@public/images/common/google-play-dark.svg'
import GooglePlayLight from '@public/images/common/google-play-light.svg'

import styles from './download-at-buttons.module.css'

const DownloadAtButtons = ({
	type = 'light',
	className,
}: {
	type?: 'dark' | 'light'
	className?: string
}) => {
	return (
		<div className={`${styles.download_app} ${className}`}>
			<Link
				href='https://apps.apple.com/us/app/izzi-ride/id6449208978'
				target='_blank'
				title='App Store'
			>
				<Image
					src={type === 'light' ? AppStoreLight : AppStoreDark}
					alt='Download iZZi RIDE on the App Store'
				/>
			</Link>
			<Link
                href='/'
                title='Google Play'
                target='_blank'
            >
				<Image
					src={type === 'light' ? GooglePlayLight : GooglePlayDark}
					alt='Get iZZi RIDE on Google Play'
				/>
			</Link>
		</div>
	)
}

export default DownloadAtButtons
