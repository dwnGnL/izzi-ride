'use client'
import { useState, useRef, useEffect, useCallback } from 'react'

import { motion, AnimatePresence } from 'framer-motion'

import { usePathname } from 'next/navigation'
import useDevice from '@hooks/use-device'
import useSectionsPosition from '@hooks/use-sections-position'

import Logo from '@common/logo/logo'
import Navigation from '@components/navigation/navigation'
import Button from '@common/button/button'
import HamburgerMenuIcon from '@components/hamburger-menu-icon/hamburger-menu-icon'
import MobileMenu from '@components/mobile-menu/mobile-menu'

import scrollTo from '@helpers/scroll-to'

import { navigation } from './constant'
import styles from './header.module.css'

const MobileMenuMotion = motion(MobileMenu)

const mobileMenuAnimation = {
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

    const pathname = usePathname()
    const deviceType = useDevice()
    const sectionPositions = useSectionsPosition()

    const header = useRef<HTMLElement>(null)
    const headerDefaultPosition = useRef(0)

    function scroll() {
        scrollTo(sectionPositions['download at'].top)
    }

    function menuToggle() {
        if (!header.current) return

        setIsMenuOpened(prevMenuState => {
            const action = prevMenuState ? 'remove' : 'add'
            header.current?.classList[action](styles.menu_opened)
            return !prevMenuState
        })

        setMenuTopPadding(
            header.current.getBoundingClientRect().bottom + headerDefaultPosition.current / 2,
        )
    }

    function borderRadiusHandler(elem: HTMLElement) {
        const defaultRadius = parseInt(window.getComputedStyle(elem).borderBottomRightRadius)
        const currentPosition = elem.getBoundingClientRect().top
        const percent = currentPosition / headerDefaultPosition.current

        setBorderRadius(defaultRadius * percent)
    }

    const scrollHandler = useCallback(
        (elem: HTMLElement) => {
            if (!sectionPositions.main) return

            if (window.scrollY > sectionPositions.main.bottom) {
                elem.classList.add(styles.show)
            }

            if (window.scrollY <= headerDefaultPosition.current) {
                elem.classList.remove(styles.show)
            }
        },
        [sectionPositions],
    )

    useEffect(() => {
        if (!header.current) return

        headerDefaultPosition.current =
            parseInt(window.getComputedStyle(header.current).marginTop) ||
            parseInt(window.getComputedStyle(header.current).top)

        const headerHandler =
            pathname === '/'
                ? scrollHandler.bind(null, header.current)
                : borderRadiusHandler.bind(null, header.current)

        if (pathname !== '/') borderRadiusHandler(header.current)

        document.addEventListener('scroll', headerHandler)
        return () => document.removeEventListener('scroll', headerHandler)
    }, [header, pathname, scrollHandler])

    return (
        <>
            <header
                ref={header}
                style={!isNaN(Number(borderRadius)) ? {
                    borderTopLeftRadius: `${borderRadius}px`,
                    borderTopRightRadius: `${borderRadius}px`,
                } : undefined}
                className={styles.header}
            >
                <Logo callback={() => setIsMenuOpened(false)} />

                {deviceType === 'desktop' && (
                    <>
                        <Navigation navigationList={navigation} />
                        <Button title='Get it' className={styles.header_btn} callback={scroll} />
                    </>
                )}

                {deviceType && deviceType !== 'desktop' && (
                    <HamburgerMenuIcon isOpened={isMenuOpened} menuHandler={menuToggle} />
                )}
            </header>
            <AnimatePresence>
                {deviceType !== 'desktop' && isMenuOpened && (
                    <MobileMenuMotion
                        transition={{ ease: 'linear' }}
                        initial='hidden'
                        animate='visible'
                        exit='hidden'
                        variants={mobileMenuAnimation}
                        paddingTop={menuTopPadding}
                        closeMenu={() => setIsMenuOpened(false)}
                    />
                )}
            </AnimatePresence>
        </>
    )
}

export default Header
