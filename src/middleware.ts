import type { NextRequest } from 'next/server'
import { APP_STORE_URL, GOOGLE_PLAY_URL } from '@constants/links'
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
    const redirection = {
        android: GOOGLE_PLAY_URL,
        iphone: APP_STORE_URL,
        default: '/',
    }

    function getDevice() {
        var userAgent = request.headers.get('user-agent')
        console.log('userAgent', userAgent)
        

        if (userAgent && /android/i.test(userAgent)) return 'android'
        if (userAgent && /iPad|iPhone/.test(userAgent) && !window.MSStream) return 'iphone'

        return 'default'
    }

    return NextResponse.redirect(new URL(redirection[getDevice()], request.url))
}

export const config = {
    matcher: '/app',
}
