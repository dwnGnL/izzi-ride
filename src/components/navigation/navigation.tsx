import type { FC } from 'react'
import type { NavigationParams } from '@type/navigation.type'

import { useRouter } from 'next/router'

import Link from 'next/link'

import styles from './navigation.module.css'

const Navigation: FC<NavigationParams> = ({ navigationList, extraClass, activeClass, callback }) => {
	const router = useRouter()
	const isActive = (linkHref: string) => (router.pathname === `/${linkHref}` ? activeClass || styles.active : '')

	return (
		<nav className={`${styles.header_nav} ${extraClass}`}>
			{navigationList.map(navItem => {
				return (
					<Link
						href={navItem.href}
						key={navItem.href}
						title={navItem.title}
						target={navItem.target}
						className={`${styles.navigation_button} ${isActive(navItem.href)}`}
						onClick={callback}
					>
						{navItem.title}
					</Link>
				)
			})}
		</nav>
	)
}

export default Navigation
