import Image from 'next/image'
import { motion } from 'framer-motion'
import DownloadAtButtons from '@common/download-at-buttons/download-at-buttons'

import phones from '@public/images/download-at-phones.png'

import styles from './download-at.module.css'

const animation = {
    hidden: {
        opacity: 0,
        y: 100,
    },
    visible: (custom: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: custom ? custom : 0,
        },
    }),
}

const AnimImage = motion(Image)

const DownloadAt = () => {
    return (
        <motion.section
            viewport={{ amount: 0.4, once: true }}
            initial='hidden'
            whileInView='visible'
            variants={animation}
            className={styles.download_section}
            data-title={'download at'}
        >
            <div>
                <AnimImage
                    initial='hidden'
                    whileInView='visible'
                    variants={animation}
                    viewport={{ amount: 0.4, once: true }}
                    custom={0.5}
                    src={phones}
                    alt='Download IZZI RIDE'
                    className={styles.image}
                />
                <h2 className={styles.headline}>Ready To Get Started?</h2>
                <div className={styles.text}>Get it and enjoy your trip</div>
                <DownloadAtButtons type='light' className={styles.buttons} />
            </div>
        </motion.section>
    )
}

export default DownloadAt
