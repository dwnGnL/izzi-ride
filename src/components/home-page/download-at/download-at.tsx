import Image from 'next/image'
import AnimBlock from '@hoc/animated-block/animated-block'
import DownloadAtButtons from '@common/download-at-buttons/download-at-buttons'

import phones from '@public/images/home-page/download-at-phones.png'
import styles from './download-at.module.css'

const DownloadAt = () => {
    return (
        <section className={styles.download_section} data-title='download at'>
            <AnimBlock inViewExtraClass={styles.in_view}>
                <Image src={phones} alt='Download iZZi RIDE' className={styles.image} />
                <h2 className={styles.headline}>Ready To Get Started?</h2>
                <div className={styles.text}>Get it and enjoy your trip</div>
                <DownloadAtButtons type='light' className={styles.buttons} />
            </AnimBlock>
        </section>
    )
}

export default DownloadAt
