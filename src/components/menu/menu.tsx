import type { FC } from 'react'
import type { NavigationParams } from '@type/navigation.type'

import { useRouter } from 'next/router'

import Link from 'next/link'

import styles from './menu.module.css'

const MainNavigation: FC<NavigationParams> = ({ navigationList, extraClass }) => {
	const router = useRouter()
	const isActive = (linkHref: string) => (router.pathname === `/${linkHref}` ? styles.active : '')

	return (
		<nav className={`${styles.header_nav} ${extraClass}`}>
			{navigationList.map(navItem => {
				return (
					<Link
						href={navItem.href}
						key={navItem.href}
						title={navItem.title}
						className={`${styles.navigation_button} ${isActive(navItem.href)}`}
					>
						{navItem.title}
					</Link>
				)
			})}
		</nav>
	)
}

export default MainNavigation
