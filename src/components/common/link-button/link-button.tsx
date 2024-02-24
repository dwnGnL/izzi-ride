import type { FC, ReactNode } from 'react'
import Link from 'next/link'

import styles from './link-button.module.css'

const LinkButton: FC<LinkButtonTypes> = ({ children, href, title, extraClass }) => {
	return (
		<Link href={href} title={title} className={`${styles.button} ${extraClass}`}>
			{children || title}
		</Link>
	)
}

type LinkButtonTypes = {
	href: string
	title: string
	children?: ReactNode
	extraClass?: string
}

export default LinkButton
