'use client'
import type { ReactNode } from 'react'

import { useEffect, useRef, useState } from 'react'

import styles from './scroller.module.css'

type Scroller = {
    addOverlayTag?: boolean
    children: ReactNode
}

const Scroller = ({ addOverlayTag = true, children }: Scroller) => {
    const scrollerRef = useRef<HTMLDivElement>(null)
    const scrollerBarLine = useRef<HTMLDivElement>(null)
    const scrollerBarRef = useRef<HTMLDivElement>(null)
    const [scrollYProgress, setScrollYProgress] = useState(0)
    const [currPosition, setCurrPosition] = useState(0)
    const [scrollable, setScrollable] = useState(true)

    useEffect(() => {
        const scrollerElement = !addOverlayTag ? window : scrollerRef.current
        const isAllLoaded = !scrollerElement || !scrollerBarRef.current || !scrollerBarLine.current
        const isBodyScroller = !addOverlayTag || !scrollerRef.current

        if (isAllLoaded) return
        // content properties
        const visibleHeight = isBodyScroller ? window.innerHeight : scrollerRef.current.offsetHeight
        const entireHeight = isBodyScroller ? document.body.scrollHeight : scrollerRef.current.children[0].clientHeight

        // scrollbar properties
        const scrollBarHeightCoefficient = entireHeight / visibleHeight

        if (scrollBarHeightCoefficient < 1) setScrollable(false)

        const scrollBarHeight = scrollerBarLine.current.clientHeight / scrollBarHeightCoefficient
        scrollerBarRef.current.style.height = `${scrollBarHeight}px`

        const scrollMovingSize = scrollerBarLine.current.clientHeight - scrollerBarRef.current.clientHeight

        scrollHandler()

        function scrollHandler() {
            const scrollPosition = isBodyScroller ? window.scrollY : scrollerRef.current.scrollTop

            setScrollYProgress(Math.abs(scrollPosition / (entireHeight - visibleHeight)))
            setCurrPosition(scrollMovingSize * scrollYProgress)
        }

        scrollerElement.addEventListener('scroll', scrollHandler)
        return () => scrollerElement.removeEventListener('scroll', scrollHandler)
    }, [addOverlayTag, scrollYProgress])

    if (addOverlayTag) {
        return (
            <div className={styles.overlay}>
                <div ref={scrollerRef} className={styles.content_wrapper}>
                    <div className={styles.content}>{children}</div>
                </div>

                {scrollable && (
                    <div ref={scrollerBarLine} className={styles.scroller_line}>
                        <div
                            ref={scrollerBarRef}
                            className={styles.scroller_bar}
                            style={{ top: `${currPosition}px` }}
                        ></div>
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
                    ></div>
                </div>
            )}
        </>
    )
}

export default Scroller
