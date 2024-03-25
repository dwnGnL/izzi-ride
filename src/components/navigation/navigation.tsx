import type { FC } from 'react'
import type { NavigationProps } from '@type/navigation.type'

import { useCallback, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

import scrollTo from '@helpers/scroll-to'
import useSectionsPosition from '@hooks/use-sections-position'

import styles from './navigation.module.css'

const Navigation: FC<NavigationProps> = ({ navigationList, className, activeClass, callback }) => {
    const [activeMenuItem, setActiveMenuItem] = useState('')
    const sectionPositions = useSectionsPosition()
    const pathname = usePathname()

    const isActive = ({title, href}: {title: string, href?: string}) => {
        if (href) return href === pathname ? activeClass || styles.active : ''
        return title === activeMenuItem ? activeClass || styles.active : ''
    }

    const getFocusedSection = useCallback(() => {
        for (let section in sectionPositions) {
            if (
                window.scrollY + window.innerHeight / 2 < sectionPositions[section].top ||
                window.scrollY + window.innerHeight / 2 > sectionPositions[section].bottom
            ) {
                continue
            }

            setActiveMenuItem(section)
        }
    }, [sectionPositions])

    useEffect(() => {
        getFocusedSection()
        
        window.addEventListener('scroll', getFocusedSection)
        return () => window.removeEventListener('scroll', getFocusedSection)
    }, [getFocusedSection])

    function NavBtnHandler(e: any) {
        if (callback) callback()
        if (e.target.getAttribute('href')) return

        const name = e.target.getAttribute('title')
        scrollTo(sectionPositions[name].top)
    }

    return (
        <nav className={`${styles.header_nav} ${className}`}>
            {navigationList.map(navItem =>
                navItem.href ? (
                    <Link
                        href={navItem.href}
                        target={navItem.target}
                        title={navItem.title}
                        className={`${styles.navigation_button} ${isActive(navItem)}`}
                        key={navItem.href}
                        onClick={NavBtnHandler}
                    >
                        {navItem.title}
                    </Link>
                ) : (
                    <div
                        key={navItem.title}
                        title={navItem.title}
                        className={`${styles.navigation_button} ${isActive(navItem)}`}
                        onClick={NavBtnHandler}
                    >
                        {navItem.title}
                    </div>
                ),
            )}
        </nav>
    )
}

export default Navigation
