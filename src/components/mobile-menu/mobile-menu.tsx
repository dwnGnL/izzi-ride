import Navigation from '@components/navigation/navigation'
import AppStoreGooglePlay from '@common/app-store-google-play/app-store-google-play'

import { navigation } from '@components/header/constant'

import styles from './mobile-menu.module.css'

const MobileMenu = ({ paddingTop, closeMenu }: { paddingTop: number; closeMenu: () => void }) => {
    return (
        <div className={styles.menu_overlay} style={{ paddingTop: `calc(${paddingTop}px + 1em)` }}>
            <Navigation
                navigationList={navigation}
                extraClass={styles.mobile_menu}
                activeClass={styles.active}
                callback={closeMenu}
            />

            <MenuPlaceholder />
        </div>
    )
}

const MenuPlaceholder = () => {
    return (
        <div className={styles.menu_placeholder}>
            <h2>
                Do you often drive
                <br /> to another state by car?
                <br /> Then earn with IZZI RIDE
            </h2>

            <div className={styles.copy}>Get it and enjoy your trip</div>

            <AppStoreGooglePlay type='dark' />
        </div>
    )
}

export default MobileMenu
