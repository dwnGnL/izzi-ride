import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import defaultLogo from '@public/images/common/logo.png'

import styles from './logo.module.css'

type Logo = {
    className?: string
    image?: StaticImageData
    callback?: () => void
}

const Logo = ({ className, image, callback }: Logo) => {
    const logoImage = image || defaultLogo

    return (
        <Link href='/' title='iZZi' className={className} onClick={callback}>
            <Image src={logoImage} alt='iZZi logo' className={styles.logo} priority />
        </Link>
    )
}

export default Logo
