import { motion } from 'framer-motion'

import Image from 'next/image'
import FadeInOnScroll from '@hoc/fade-in-on-scroll'

import phone from '@public/images/about-phone.png'

import styles from './about.module.css'
import useDevice from '@hooks/use-device'

const fromBlockAnimation = {
    to: (custom: number) => ({
        transition: {
            delay: custom,
        },
        left: '-2.5%',
        width: '105%',
        opacity: 1,
    }),
}

const videoFormats = {
    horizontal: 'https://www.youtube.com/embed/RK_U9EwKoJo',
    vertical: 'https://www.youtube.com/embed/ra6H9PdY00o',
}

const About = () => {
    const device = useDevice()
    const videoUrl = device === 'desktop' ? videoFormats.vertical : videoFormats.horizontal

    return (
        <section className={styles.about_section} data-title='about us'>
            <FadeInOnScroll className={styles.about}>
                <>
                    <div className={styles.media} data-title='Choose a route and time'>
                        <FadeInOnScroll className={`${styles.phone_overlay} upAndDown`} delay={0.5}>
                            <>
                                <Image src={phone} alt='Choose a route and time' />
                                <motion.div
                                    whileInView='to'
                                    variants={fromBlockAnimation}
                                    className={styles.from_block}
                                    custom={1}
                                ></motion.div>
                            </>
                        </FadeInOnScroll>
                    </div>
                    <FadeInOnScroll>
                        <h1 className={styles.headline}>Choose a route and time</h1>
                    </FadeInOnScroll>
                    <FadeInOnScroll className={styles.copy}>
                        Our app is designed to make it easy and affordable for you to travel around the states. We have
                        developed a user-friendly interface for finding a driver or ride and communication
                    </FadeInOnScroll>
                </>
            </FadeInOnScroll>

            <FadeInOnScroll className={styles.about}>
                <>
                    <div className={`${styles.media} ${styles.video}`} data-title='Why you should use iZZi RIDE?'>
                        <iframe
                            src={`${videoUrl}?si=is6dbmK1A1XTpGdO&rel=0`}
                            title='Why you should use iZZi RIDE?'
                            allowFullScreen
                        ></iframe>
                    </div>
                    <FadeInOnScroll>
                        <h1 className={styles.headline}>Why you should use iZZi RIDE?</h1>
                    </FadeInOnScroll>
                    <FadeInOnScroll className={styles.copy}>
                        With the app, you can personalize and customize your trip, paying less than for a regular taxi.
                        Also, soon the application will have a smart system for evaluating the driver and the ride, too,
                        so you can travel safely.
                    </FadeInOnScroll>
                </>
            </FadeInOnScroll>
        </section>
    )
}

export default About
