import type { Url } from 'next/dist/shared/lib/router/router'
import type { HTMLAttributeAnchorTarget, MutableRefObject } from 'react'

export type NavigationProps = {
    navigationList: Array<NavigationItem>
    className?: string
    activeClass?: string
    callback?: () => void
}

export type HeaderNavigation = {
    [key: string]: NavigationItem[]
}

export type NavigationItem = {
    title: string
    href?: Url
    target?: HTMLAttributeAnchorTarget
}
