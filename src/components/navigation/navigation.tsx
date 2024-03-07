import type { FC } from 'react'
import type { NavigationProps } from '@type/navigation.type'

import scrollTo from '@helpers/scrollTo'
import useSectionProperties from '@hooks/use-section-properties'

import styles from './navigation.module.css'

const Navigation: FC<NavigationProps> = ({ navigationList, className, activeClass, callback }) => {
    const {curSectionName, sectionPositions} = useSectionProperties()

    const isActive = (linkTitle: string) => {
        return linkTitle.toLocaleLowerCase() === curSectionName ? activeClass || styles.active : ''
    }

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
