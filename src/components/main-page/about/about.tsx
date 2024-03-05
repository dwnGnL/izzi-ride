import { motion } from 'framer-motion'

import Image from 'next/image'
import phone from '@public/images/about-phone.png'

import styles from './about.module.css'

const animation = {
    hidden: {
        opacity: 0,
        y: 100,
    },
    visible: {
        opacity: 1,
        y: 0,
    },
}

const mobileAnimation = {
    hidden: {
        opacity: 0,
        y: 500,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 1,
        },
    },
}

const About = () => {
    return (
        <section className={styles.about_section} data-title={'about'}>
            <motion.div
                initial='hidden'
                whileInView='visible'
                variants={animation}
                viewport={{ amount: 0.4, once: true }}
                className={styles.about}
            >
                <div className={styles.media} data-title='Choose a route and time'>
                    <motion.div
                        className={styles.phone_overlay}
                        variants={mobileAnimation}
                        custom={{ size: 500, delay: 1 }}
                    >
                        <Image src={phone} alt='Choose a route and time' />
                    </motion.div>
                </div>
                <h1 className={styles.headline}>Choose a route and time</h1>
                <div className={styles.copy}>
                    Our app is designed to make it easy and affordable for you to travel around the states. We have
                    developed a user-friendly interface for finding a driver or ride and communication
                </div>
            </motion.div>

            <motion.div
                initial='hidden'
                whileInView='visible'
                variants={animation}
                viewport={{ amount: 0.4, once: true }}
                className={styles.about}
            >
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
                    Also, soon the application will have a smart system for evaluating the driver and the ride, too, so
                    you can travel safely.
                </div>
            </motion.div>
        </section>
    )
}

export default About
