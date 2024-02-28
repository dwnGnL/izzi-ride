'use client'
import type { NavigationItem } from '@type/navigation.type'

import { useState, useRef, useEffect } from 'react'
import useDevice from '@hooks/use-device'

import Logo from '@common/logo/logo'
import MainNavigation from '@components/menu/menu'
import LinkButton from '@common/link-button/link-button'
import HamburgerMenu from '@components/hamburger-menu/hamburger-menu'

import styles from './header.module.css'

const navigation: NavigationItem[] = [
	{
		title: 'About us',
		href: 'about',
	},
	{
		title: 'Features',
		href: 'features',
	},
	{
		title: 'Owners',
		href: 'owners',
	},
	{
		title: 'Contact us',
		href: 'contact',
	},
]

const Header = () => {
	const [borderRadius, setBorderRadius] = useState<number>()
	const [menuTopPadding, setMenuTopPadding] = useState<number>()
	const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false)

	const deviceType = useDevice()

	const header = useRef<HTMLElement>(null)

	useEffect(() => {
		if (!header.current) return

		let headerElem = header.current

		borderRadiusHandler(headerElem)

		window.addEventListener('resize', borderRadiusHandler.bind(null, headerElem))
		document.addEventListener('scroll', borderRadiusHandler.bind(null, headerElem))

		return () => {
			window.removeEventListener('resize', borderRadiusHandler.bind(null, headerElem))
			document.removeEventListener('scroll', borderRadiusHandler.bind(null, headerElem))
		}
	}, [header])

	function borderRadiusHandler(elem: HTMLElement) {
		let defaultPosition = elem.offsetTop
		let defaultRadius = Number(
			window.getComputedStyle(elem).borderRadius.replace(/px/g, '').split(' ').at(-1),
		)

		let currentPosition = elem.getBoundingClientRect().top
		let currentRadius = defaultRadius
		
		let percent = currentPosition / defaultPosition

		setBorderRadius(currentRadius * percent)
		setMenuTopPadding(elem.getBoundingClientRect().bottom)
	}

	return (
		<>
			<header
				ref={header}
				style={{
					borderTopLeftRadius: `${borderRadius}px`,
					borderTopRightRadius: `${borderRadius}px`,
				}}
				className={`${styles.header}`}
			>
				<Logo />

				{deviceType === 'desktop' && (
					<>
						<MainNavigation navigationList={navigation} />
						<LinkButton title='Get it' href='/' extraClass={styles.header_btn} />
					</>
				)}

				{deviceType && deviceType !== 'desktop' && (
					<HamburgerMenu
						isOpened={isMenuOpened}
						menuHandler={() => setIsMenuOpened(!isMenuOpened)}
					/>
				)}
			</header>
			{deviceType !== 'desktop' && isMenuOpened && (
				<div
					className={styles.menu_overlay}
					style={{ paddingTop: `calc(${menuTopPadding}px + 1.5em)` }}
				>
					<MainNavigation navigationList={navigation} extraClass={styles.mobile_menu} />
				</div>
			)}
		</>
	)
}

export default Header
