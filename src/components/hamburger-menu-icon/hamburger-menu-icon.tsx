import type { FC } from 'react'

import styles from './hamburger-menu-icon.module.css'

type HamburgerMenuOptions = {
	isOpened: boolean
	menuHandler: () => void
}

const HamburgerMenuIcon: FC<HamburgerMenuOptions> = ({ isOpened, menuHandler }) => {
	const burgerClassName = isOpened
		? `${styles.hamburger_btn} ${styles.active}`
		: styles.hamburger_btn

	return (
		<div className={burgerClassName} onClick={menuHandler}>
			<div className={`${styles.burger_line} ${styles.burger_line_0}`}></div>
			<div className={`${styles.burger_line} ${styles.burger_line_1}`}></div>
			<div className={`${styles.burger_line} ${styles.burger_line_2}`}></div>
		</div>
	)
}

export default HamburgerMenuIcon
