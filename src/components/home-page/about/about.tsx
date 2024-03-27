'use client'
import Image from 'next/image'
import AnimBlock from '@hoc/animated-block/animated-block'

import useDevice from '@hooks/use-device'

import { ABOUT } from '@constants/section'
import phone from '@public/images/home-page/about-phone.png'
import styles from './about.module.css'

const videoFormats = {
    horizontal: 'https://www.youtube-nocookie.com/embed/RK_U9EwKoJo',
    vertical: 'https://www.youtube-nocookie.com/embed/ra6H9PdY00o',
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
                    cities and states. We have developed a user-friendly interface for finding and
                    connecting drivers and ridemates and communication between them thru the app.
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
                    a regular taxi as a passenger or save on gas and tolls by sharing the costs
                    with your ridemates as a driver on your own car. Soon the application will have
                    a smart system for evaluating the drivers and ridemates thru the app. Both sides
                    can share their experience with others and rate their trip on the app. It will
                    give others more information before booking a ride and keep their travel more
                    safe and comfortable.
                </div>
            </AnimBlock>
        </section>
    )
}

export default About
