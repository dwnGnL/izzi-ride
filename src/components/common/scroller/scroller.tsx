'use client'
import type { ReactNode } from 'react'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

import styles from './scroller.module.css'

type Scroller = {
    children: ReactNode
    className?: string
    addOverlayTag?: boolean
}

const Scroller = ({ addOverlayTag = true, children, className }: Scroller) => {
    const scrollerRef = useRef<HTMLDivElement>(null)
    const scrollerBarLine = useRef<HTMLDivElement>(null)
    const scrollerBarRef = useRef<HTMLDivElement>(null)
    const [currPosition, setCurrPosition] = useState(0)
    const [scrollable, setScrollable] = useState(true)
    const path = usePathname()

    useEffect(() => {
        const scrollerLine = scrollerBarLine.current
        const scrollerBar = scrollerBarRef.current
        if (!scrollerLine) return
        if (!scrollerBar) return

        const line = scrollerLine
        const scroller = addOverlayTag ? scrollerRef.current : null
        if (addOverlayTag && !scroller) return

        const isBodyScroller = !scroller
        const scrollerElement = scroller ?? window
        const visibleHeight = scroller?.clientHeight ?? window.innerHeight
        const entireHeight = scroller?.scrollHeight ?? document.body.scrollHeight

        const scrollBarHeightCoefficient =
            path === '/' && isBodyScroller
                ? (entireHeight - visibleHeight) / visibleHeight
                : entireHeight / visibleHeight

        if (scrollBarHeightCoefficient < 1) {
            setScrollable(false)
            return
        }

        setScrollable(true)
        const scrollBarHeight = line.clientHeight / scrollBarHeightCoefficient
        scrollerBar.style.height = `${scrollBarHeight}px`

        const scrollMovingSize = line.clientHeight - scrollerBar.clientHeight

        scrollHandler()

        function scrollHandler() {
            if (path === '/' && window.scrollY < visibleHeight && isBodyScroller) {
                line.classList.add(styles.attached)
                return
            } else {
                line.classList.remove(styles.attached)
            }

            const size = path === '/' && isBodyScroller ? 2 : 1
            let scrollPosition: number
            if (isBodyScroller) {
                scrollPosition = window.scrollY
                if (path === '/') scrollPosition -= visibleHeight
            } else {
                scrollPosition = scroller?.scrollTop ?? 0
            }
            const scrollRange = entireHeight - visibleHeight * size
            const progress = scrollRange > 0 ? Math.min(Math.max(scrollPosition / scrollRange, 0), 1) : 0

            setCurrPosition(scrollMovingSize * progress)
        }

        scrollerElement.addEventListener('scroll', scrollHandler)
        return () => scrollerElement.removeEventListener('scroll', scrollHandler)
    }, [addOverlayTag, path])

    if (addOverlayTag) {
        return (
            <div className={`${styles.overlay} ${className}`}>
                <div ref={scrollerRef} className={styles.content_wrapper}>
                    <div className={styles.content}>{children}</div>
                </div>

                {scrollable && (
                    <div ref={scrollerBarLine} className={styles.scroller_line}>
                        <div
                            ref={scrollerBarRef}
                            className={styles.scroller_bar}
                            style={{ top: `${currPosition}px` }}
                        />
                    </div>
                )}
            </div>
        )
    }

    return (
        <>
            {children}
            {scrollable && (
                <div ref={scrollerBarLine} className={`${styles.scroller_line} scroller-line`}>
                    <div
                        ref={scrollerBarRef}
                        className={styles.scroller_bar}
                        style={{ top: `${currPosition}px` }}
                    />
                </div>
            )}
        </>
    )
}

export default Scroller
