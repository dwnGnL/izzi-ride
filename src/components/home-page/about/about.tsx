'use client'
import Image from 'next/image'
import AnimBlock from '@hoc/animated-block/animated-block'

import useDevice from '@hooks/use-device'

import { ABOUT } from '@constants/section'
import phone from '@public/images/home-page/about-phone.png'
import styles from './about.module.css'

const videoFormats = {
    horizontal: 'https://www.youtube.com/embed/RK_U9EwKoJo',
    vertical: 'https://www.youtube.com/embed/ra6H9PdY00o',
}

const About = () => {
    const device = useDevice()
    const videoUrl = device === 'desktop' ? videoFormats.vertical : videoFormats.horizontal

    return (
        <section className={styles.about_section} data-title={ABOUT}>
            <AnimBlock className={styles.about} inViewExtraClass={styles.in_view}>
                <div className={styles.media} data-title='Choose a route and time'>
                    <div className={styles.phone_overlay}>
                        <Image src={phone} alt='Choose a route and time' />
                        <div className={styles.from_block}></div>
                    </div>
                </div>

                <h2 className={styles.headline}>Choose a route and time</h2>

                <div className={styles.copy}>
                    Our app is designed to make it easy and affordable for you to travel around the
                    states. We have developed a user-friendly interface for finding a driver or ride
                    and communication
                </div>
            </AnimBlock>

            <AnimBlock className={styles.about} inViewExtraClass={styles.in_view}>
                <div
                    className={`${styles.media} ${styles.video}`}
                    data-title='Why you should use iZZi RIDE?'
                >
                    <iframe
                        src={`${videoUrl}?si=is6dbmK1A1XTpGdO&rel=0`}
                        title='Why you should use iZZi RIDE?'
                        allowFullScreen
                    ></iframe>
                </div>

                <h2 className={styles.headline}>Why you should use iZZi RIDE?</h2>

                <div className={styles.copy}>
                    With the app, you can personalize and customize your trip, paying less than for
                    a regular taxi. Also, soon the application will have a smart system for
                    evaluating the driver and the ride, too, so you can travel safely.
                </div>
            </AnimBlock>
        </section>
    )
}

export default About
