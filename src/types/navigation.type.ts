import type { HTMLAttributeAnchorTarget, MutableRefObject } from 'react'

export type NavigationProps = {
    navigationList: Array<NavigationItem>
    className?: string
    activeClass?: string
    callback?: () => void
}

export type NavigationItem = {
    title: string
    href: string
    target?: HTMLAttributeAnchorTarget
}
