import { forwardRef } from 'react'
import Navigation from '@components/navigation/navigation'
import DownloadAtButtons from '@common/download-at-buttons/download-at-buttons'

import { navigation } from '@components/header/constant'

import styles from './mobile-menu.module.css'

type Props = {
    paddingTop: number
    closeMenu: () => void
}

const MobileMenu = forwardRef<HTMLDivElement, Props>(({ paddingTop, closeMenu }, ref) => {
    return (
        <div ref={ref} className={styles.menu_overlay} style={{ paddingTop: `calc(${paddingTop}px + 1em)` }}>
            <Navigation
                navigationList={navigation}
                className={styles.mobile_menu}
                activeClass={styles.active}
                callback={closeMenu}
            />

            <MenuPlaceholder />
        </div>
    )
})

const MenuPlaceholder = () => {
    return (
        <div className={styles.menu_placeholder}>
            <h2>
                Do you often drive
                <br /> to another state by car?
                <br /> Then earn with IZZI RIDE
            </h2>

            <div className={styles.copy}>Get it and enjoy your trip</div>

            <DownloadAtButtons type='dark' />
        </div>
    )
}

export default MobileMenu
