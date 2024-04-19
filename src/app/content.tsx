'use client'
import dynamic from 'next/dynamic'

import type { ReactNode } from 'react'

import { Provider } from 'react-redux'
import { store } from '@store/store'

import Loader from '@common/loader/loader'
import Scroller from '@common/scroller/scroller'
import Footer from '@components/footer/footer'
import Alert from '@common/alert/alert'

const Header = dynamic(() => import('@components/header/header'), { ssr: false })

const Content = ({ children }: { children: ReactNode }) => {
    return (
        <Provider store={store}>
            <Loader />
            <Alert />

            <Scroller addOverlayTag={false}>
                <Header />
                {children}
                <Footer />
            </Scroller>
        </Provider>
    )
}

export default Content
