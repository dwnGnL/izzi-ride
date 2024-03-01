import Link from 'next/link'
import Image from 'next/image'

import AppStoreDark from '@public/images/app-store-dark.svg'
import AppStoreLight from '@public/images/app-store-light.svg'

import GooglePlayDark from '@public/images/google-play-dark.svg'
import GooglePlayLight from '@public/images/google-play-light.svg'

import styles from './app-store-google-play.module.css'

const AppStoreGooglePlay = ({ type = 'light' }: { type?: 'dark' | 'light' }) => {
    return (
        <div className={styles.download_app}>
            <Link href='/' title='App Store'>
                <Image
                    src={type === 'light' ? AppStoreLight : AppStoreDark}
                    alt='Download IZZI RIDE on the App Store'
                />
            </Link>
            <Link href='/' title='Google Play'>
                <Image src={type === 'light' ? GooglePlayLight : GooglePlayDark} alt='Get IZZI RIDE on Google Play' />
            </Link>
        </div>
    )
}

export default AppStoreGooglePlay