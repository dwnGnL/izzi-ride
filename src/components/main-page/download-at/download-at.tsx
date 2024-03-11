import Image from 'next/image'
import FadeInOnScroll from '@hoc/fade-in-on-scroll'
import DownloadAtButtons from '@common/download-at-buttons/download-at-buttons'

import phones from '@public/images/download-at-phones.png'
import styles from './download-at.module.css'

const DownloadAt = () => {
    return (
        <section className={styles.download_section} data-title='download at'>
            <FadeInOnScroll>
                <>
                    <FadeInOnScroll className={`${styles.image} upAndDown`} delay={0.5}>
                        <Image src={phones} alt='Download IZZI RIDE' />
                    </FadeInOnScroll>
                    <h2 className={styles.headline}>Ready To Get Started?</h2>
                    <div className={styles.text}>Get it and enjoy your trip</div>
                    <DownloadAtButtons type='light' className={styles.buttons} />
                </>
            </FadeInOnScroll>
        </section>
    )
}

export default DownloadAt
