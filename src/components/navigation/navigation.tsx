import type { FC } from 'react'
import type { NavigationProps } from '@type/navigation.type'

// import Link from 'next/link'
import useFocusedSection from '@hooks/use-focused-section'

import styles from './navigation.module.css'

const Navigation: FC<NavigationProps> = ({ navigationList, className, activeClass, callback }) => {
    const [curSection, sections] = useFocusedSection()

    const isActive = (linkTitle: string) => {
        return linkTitle.toLocaleLowerCase() === curSection ? activeClass || styles.active : ''
    }

    function NavBtnHandler(e: any) {
        const name = e.target.getAttribute('title').toLocaleLowerCase()
        window.scrollTo({ top: sections[name].top, behavior: 'smooth' })

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
