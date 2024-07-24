import type { NavigationItem } from '@type/navigation.type'
import { forwardRef } from 'react'
import Navigation from '@components/navigation/navigation'
import DownloadAtButtons from '@common/download-at-buttons/download-at-buttons'

import { MAIN_HEADLINE } from '@constants/common-copy'
import styles from './mobile-menu.module.css'

type Props = {
    navigationList: NavigationItem[]
    paddingTop: number
    closeMenu: () => void
}

const MobileMenu = forwardRef<HTMLDivElement, Props>(({ navigationList, paddingTop, closeMenu }, ref) => {
    return (
        <div ref={ref} className={styles.menu_overlay} style={{ paddingTop: `${paddingTop}px` }}>
            <Navigation
                navigationList={ navigationList }
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
            <h1 dangerouslySetInnerHTML={{ __html: MAIN_HEADLINE }}></h1>

            <div className={styles.copy}>Get it and enjoy your trip</div>

            <DownloadAtButtons type='dark' />
        </div>
    )
}

export default MobileMenu
