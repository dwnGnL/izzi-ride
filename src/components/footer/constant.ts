import type { NavigationItem } from '@type/navigation.type'

import twitter from '@public/icons/twitter-icon.svg'
import youtube from '@public/icons/youtube-icon.svg'
import instagram from '@public/icons/instagram-icon.svg'
import tiktok from '@public/icons/tiktok-icon.svg'

export const infoList = [
    {
        title: 'Email',
        value: 'support@izziride.com',
        type: 'mailto:',
    },
    {
        title: 'Phone',
        value: '555-567-8901',
        type: 'tel:',
    },
    {
        title: 'Address',
        value: '1234 Main St<br /> Moonstone City, Stardust State 12345',
    },
]

export const navigation: NavigationItem[] = [
    {
        title: 'About us',
        href: 'about us',
        scroll: true,
    },
    {
        title: 'Services',
        href: '/',
    },
    {
        title: 'Use Cases',
        href: '/',
    },
]

export const socials = [
    {
        title: 'Instagram',
        href: 'https://www.instagram.com/',
        icon: instagram,
    },
    {
        title: 'Twitter',
        href: 'https://twitter.com/',
        icon: twitter,
    },
    {
        title: 'YouTube',
        href: 'https://www.youtube.com/',
        icon: youtube,
    },
    {
        title: 'TikTok',
        href: 'https://www.tiktok.com/',
        icon: tiktok,
    },
]
