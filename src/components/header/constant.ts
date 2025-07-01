import type { NavigationItem, HeaderNavigation } from '@type/navigation.type'
import { ABOUT, FEATURES, FOUNDER, CONTACT_US } from '@constants/section'

const homeNavigation: NavigationItem[] = [
    {
        title: ABOUT,
    },
    {
        title: FEATURES,
    },
    {
        title: FOUNDER,
    },
    {
        title: CONTACT_US,
    },
]

const defaultNavigation: NavigationItem[] = [
    {
        title: 'Home',
        href: '/',
    },
]

export const headerNavigation: HeaderNavigation = {
    home: homeNavigation,
    default: defaultNavigation,
}
