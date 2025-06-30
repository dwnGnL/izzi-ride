import type { NavigationItem, HeaderNavigation } from '@type/navigation.type'
import { ABOUT, FEATURES, FOUNDER, CONTACT_US, TEAM } from '@constants/section'
import { TEAM_PAGE_URL } from '@constants/links'

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
    {
        title: TEAM,
        href: TEAM_PAGE_URL,
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
