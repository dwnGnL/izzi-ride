'use client'

import { useLayoutEffect } from 'react'
import { redirect } from 'next/navigation'

import { APP_STORE_URL, GOOGLE_PLAY_URL } from '@constants/links'

const AppPage = () => {
    useLayoutEffect(() => {
        const redirection = {
            android: GOOGLE_PLAY_URL,
            iphone: APP_STORE_URL,
            default: '/',
        }

        const Android = navigator.platform.toLowerCase().indexOf('android') !== -1 ? 'android' : null
        const iPhone = navigator.platform.toLowerCase().indexOf('iphone') !== -1 || navigator.platform.toLowerCase().indexOf('ipad') !== -1 ? 'iphone' : null

        const platform = Android || iPhone || 'default'

        redirect(redirection[platform])
    })

    return null
}

export default AppPage
