'use client'
import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import useDevice from '@hooks/use-device'
import useSectionProperties from '@hooks/use-section-properties'

import Logo from '@common/logo/logo'
import Navigation from '@components/navigation/navigation'
import Button from '@common/button/button'
import HamburgerMenuIcon from '@components/hamburger-menu-icon/hamburger-menu-icon'
import MobileMenu from '@components/mobile-menu/mobile-menu'

import scrollTo from '@helpers/scrollTo'

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

    const router = useRouter()
    const deviceType = useDevice()
    const { sectionPositions } = useSectionProperties()

    const header = useRef<HTMLElement>(null)
    const headerDefaultPosition = useRef(0)

    function scroll() {
        scrollTo(sectionPositions['download at'].top)
    }

    function menuToggle() {
        if (!header.current) return

        setIsMenuOpened(!isMenuOpened)
        setMenuTopPadding(
            header.current.getBoundingClientRect().bottom + headerDefaultPosition.current / 2,
        )
    }

    function borderRadiusHandler(elem: HTMLElement) {
        const defaultRadius = Number(
            window.getComputedStyle(elem).borderRadius.replace(/px/g, '').split(' ').at(-1),
        )

        const currentPosition = elem.getBoundingClientRect().top
        const currentRadius = defaultRadius

        const percent = currentPosition / headerDefaultPosition.current

        setBorderRadius(currentRadius * percent)
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

        const headerElem = header.current
        headerDefaultPosition.current = headerElem.offsetTop

        const headerHandler =
            router.pathname === '/'
                ? scrollHandler.bind(null, headerElem)
                : borderRadiusHandler.bind(null, headerElem)

        if (router.pathname === '/') {
            headerElem.classList.add(styles.home_page)
        } else {
            borderRadiusHandler(headerElem)
        }

        document.addEventListener('scroll', headerHandler)

        return () => {
            document.removeEventListener('scroll', headerHandler)
        }
    }, [header, router, sectionPositions, scrollHandler])

    return (
        <>
            <header
                data-title={deviceType}
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
