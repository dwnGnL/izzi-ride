import type { HTMLAttributeAnchorTarget } from 'react'

export type NavigationParams = {
	navigationList: Array<NavigationItem>
	extraClass?: string
	activeClass?: string
	callback?: () => void
}

export type NavigationItem = {
	title: string
	href: string
	target?: HTMLAttributeAnchorTarget
}
