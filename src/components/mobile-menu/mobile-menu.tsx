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
        <div ref={ref} className={styles.menu_overlay} style={{ paddingTop: `${paddingTop}px` }}>
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
            <h1>
                Do you often drive
                <br /> to another state by car?
                <br /> Then earn with iZZi RIDE
            </h1>

            <div className={styles.copy}>Get it and enjoy your trip</div>

            <DownloadAtButtons type='dark' />
        </div>
    )
}

export default MobileMenu
