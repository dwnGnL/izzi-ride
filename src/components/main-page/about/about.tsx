import { motion } from 'framer-motion'

import Image from 'next/image'
import FadeInOnScroll from '@hoc/fade-in-on-scroll'

import phone from '@public/images/about-phone.png'

import styles from './about.module.css'

const fromBlockAnimation = {
    to: (custom: number) => ({
        transition: {
            delay: custom,
        },
        left: '-2.5%',
        width: '105%',
        backgroundImage: 'url(/images/phone-direction-from-tampa.png)',
    }),
}

const About = () => {
    return (
        <section className={styles.about_section} data-title='about us'>
            <FadeInOnScroll className={styles.about}>
                <>
                    <div className={styles.media} data-title='Choose a route and time'>
                        <FadeInOnScroll className={styles.phone_overlay} delay={0.5}>
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
                    <h1 className={styles.headline}>Choose a route and time</h1>
                    <div className={styles.copy}>
                        Our app is designed to make it easy and affordable for you to travel around the states. We have
                        developed a user-friendly interface for finding a driver or ride and communication
                    </div>
                </>
            </FadeInOnScroll>

            <FadeInOnScroll className={styles.about}>
                <>
                    <div className={styles.media} data-title='Why you should use IZZI RIDE?'>
                        <iframe
                            src='https://www.youtube.com/embed/tZcg6dyiW7E?si=is6dbmK1A1XTpGdO&rel=0'
                            title='Why you should use IZZI RIDE?'
                            allowFullScreen
                        ></iframe>
                    </div>
                    <h1 className={styles.headline}>Why you should use IZZI RIDE?</h1>
                    <div className={styles.copy}>
                        With the app, you can personalize and customize your trip, paying less than for a regular taxi.
                        Also, soon the application will have a smart system for evaluating the driver and the ride, too,
                        so you can travel safely.
                    </div>
                </>
            </FadeInOnScroll>
        </section>
    )
}

export default About
