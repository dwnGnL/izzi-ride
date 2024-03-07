'use client'
import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import useDevice from '@hooks/use-device'

import Logo from '@common/logo/logo'
import Navigation from '@components/navigation/navigation'
import Button from '@common/button/button'
import HamburgerMenuIcon from '@components/hamburger-menu-icon/hamburger-menu-icon'
import MobileMenu from '@components/mobile-menu/mobile-menu'

import { navigation } from './constant'

import styles from './header.module.css'

const AnimMobileMenu = motion(MobileMenu)

const animation = {
    hidden: {
        opacity: 0,
        x: '-100vh',
    },
    visible: {
        opacity: 1,
        x: '0vh',
    },
}

const Header = () => {
    const [borderRadius, setBorderRadius] = useState<number>()
    const [menuTopPadding, setMenuTopPadding] = useState<number>(0)
    const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false)
    const deviceType = useDevice()
    const header = useRef<HTMLElement>(null)

    useEffect(() => {
        if (!header.current) return

        let headerElem = header.current

        borderRadiusHandler(headerElem)

        window.addEventListener('resize', borderRadiusHandler.bind(null, headerElem))
        document.addEventListener('scroll', borderRadiusHandler.bind(null, headerElem))

        return () => {
            window.removeEventListener('resize', borderRadiusHandler.bind(null, headerElem))
            document.removeEventListener('scroll', borderRadiusHandler.bind(null, headerElem))
        }
    }, [header])

    function borderRadiusHandler(elem: HTMLElement) {
        let defaultPosition = elem.offsetTop
        let defaultRadius = Number(window.getComputedStyle(elem).borderRadius.replace(/px/g, '').split(' ').at(-1))

        let currentPosition = elem.getBoundingClientRect().top
        let currentRadius = defaultRadius

        let percent = currentPosition / defaultPosition

        setBorderRadius(currentRadius * percent)
        setMenuTopPadding(elem.getBoundingClientRect().bottom)
    }

    return (
        <>
            <header
                ref={header}
                style={{
                    borderTopLeftRadius: `${borderRadius}px`,
                    borderTopRightRadius: `${borderRadius}px`,
                }}
                className={`${styles.header}`}
            >
                <Logo callback={() => setIsMenuOpened(false)} />

                {deviceType === 'desktop' && (
                    <>
                        <Navigation navigationList={navigation} />
                        <Button title='Get it' href='/' className={styles.header_btn} />
                    </>
                )}

                {deviceType && deviceType !== 'desktop' && (
                    <HamburgerMenuIcon isOpened={isMenuOpened} menuHandler={() => setIsMenuOpened(!isMenuOpened)} />
                )}
            </header>
            <AnimatePresence>
                {deviceType !== 'desktop' && isMenuOpened && (
                    <AnimMobileMenu
                        transition={{ ease: 'linear' }}
                        initial='hidden'
                        animate='visible'
                        exit='hidden'
                        variants={animation}
                        paddingTop={menuTopPadding}
                        closeMenu={() => setIsMenuOpened(false)}
                    />
                )}
            </AnimatePresence>
        </>
    )
}

export default Header
