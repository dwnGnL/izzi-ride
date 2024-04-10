'use client'
// import Image from 'next/image'
import useSectionsPosition from '@hooks/use-sections-position'
import AnimBlock from '@hoc/animated-block/animated-block'

import Button from '@common/button/button'
import Logo from '@common/logo/logo'

import scrollTo from '@helpers/scroll-to'
import { CONTACT_US } from '@constants/section'

import logo from '@public/images/common/logo-grey.png'
import styles from './betta.module.css'

const Betta = () => {
    const sectionPositions = useSectionsPosition()

    function scroll() {
        scrollTo(sectionPositions[CONTACT_US].top)
    }

    return (
        <section className={styles.section}>
            <AnimBlock className={styles.betta}>
                <Logo image={logo} />
                <h4 className={styles.copy}>Be the First to Experience our app:<br /> Join the Beta Program</h4>
                <Button title='Join the Beta' className={styles.btn} callback={scroll} />
            </AnimBlock>
        </section>
    )
}

export default Betta
