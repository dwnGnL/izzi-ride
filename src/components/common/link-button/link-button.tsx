import type { FC, ReactNode } from 'react'
import Link from 'next/link'

import styles from './link-button.module.css'

const LinkButton: FC<LinkButtonTypes> = ({ children, href, title, className }) => {
	return (
		<Link href={href} title={title} className={`${styles.button} ${className}`}>
			{children || title}
		</Link>
	)
}

type LinkButtonTypes = {
	href: string
	title: string
	children?: ReactNode
	className?: string
}

export default LinkButton
