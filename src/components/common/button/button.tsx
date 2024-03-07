import type { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import Link from 'next/link'

import type { Url } from 'next/dist/shared/lib/router/router'

import styles from './button.module.css'

const Button: FC<ButtonType> = ({ children, href, type, title, className, callback }) => {
	return href ? (
		<Link
			href={href}
			title={title}
			target='_blank'
			className={`${styles.button} ${className}`}
			onClick={callback}
		>
			{children || title}
		</Link>
	) : (
		<button type={type} className={`${styles.button} ${className}`} onClick={callback}>
			{children || title}
		</button>
	)
}

type ButtonType = {
	href?: Url
	title: string
	type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
	children?: ReactNode
	className?: string
	callback?: () => void
}

export default Button
