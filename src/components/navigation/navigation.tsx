import type { FC } from 'react'
import type { NavigationProps } from '@type/navigation.type'

import { useCallback, useEffect, useState } from 'react'

import scrollTo from '@helpers/scroll-to'
import useSectionsPosition from '@hooks/use-sections-position'

import styles from './navigation.module.css'

const Navigation: FC<NavigationProps> = ({ navigationList, className, activeClass, callback }) => {
    const [activeMenuItem, setActiveMenuItem] = useState('')
    const sectionPositions = useSectionsPosition()

    const isActive = (linkTitle: string) => {
        return linkTitle.toLocaleLowerCase() === activeMenuItem ? activeClass || styles.active : ''
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
        window.addEventListener('scroll', getFocusedSection)

        return () => {
            window.removeEventListener('scroll', getFocusedSection)
        }
    }, [getFocusedSection])

    function NavBtnHandler(e: any) {
        const name = e.target.getAttribute('title').toLocaleLowerCase()
        scrollTo(sectionPositions[name].top)

        if (callback) callback()
    }

    return (
        <nav className={`${styles.header_nav} ${className}`}>
            {navigationList.map(navItem => (
                <div
                    key={navItem.href}
                    title={navItem.title}
                    className={`${styles.navigation_button} ${isActive(navItem.title)}`}
                    onClick={NavBtnHandler}
                >
                    {navItem.title}
                </div>
            ))}
        </nav>
    )
}

export default Navigation
