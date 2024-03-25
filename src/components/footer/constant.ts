import type { NavigationItem } from '@type/navigation.type'

import { ABOUT } from '@constants/section'
import * as data from '@constants/footer'

import twitter from '@public/icons/twitter-icon.svg'
import youtube from '@public/icons/youtube-icon.svg'
import instagram from '@public/icons/instagram-icon.svg'
import tiktok from '@public/icons/tiktok-icon.svg'

export const infoList = [
    {
        title: 'Email',
        value: data.EMAIL,
        type: 'mailto:',
    },
    {
        title: 'Phone',
        value: data.PHONE,
        type: 'tel:',
    },
    {
        title: 'Address',
        value: data.ADDRESS,
    },
]

export const navigation: NavigationItem[] = [
    {
        title: ABOUT,
    },
    {
        title: 'Services',
        href: '',
    },
    {
        title: 'Use Cases',
        href: '',
    },
]

export const socials = [
    {
        title: 'Instagram',
        href: data.INSTAGRAM_URL,
        icon: instagram,
    },
    {
        title: 'Twitter',
        href: data.TWITTER_URL,
        icon: twitter,
    },
    {
        title: 'YouTube',
        href: data.YOUTUBE_URL,
        icon: youtube,
    },
    {
        title: 'TikTok',
        href: data.TIKTOK_URL,
        icon: tiktok,
    },
]
