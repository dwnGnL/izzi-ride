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

    useEffect(() => {
        const scrollerElement = !addOverlayTag ? window : scrollerRef.current

        if (!scrollerElement || !scrollerBarRef.current || !scrollerBarLine.current) return

        const scrollHeight =
            scrollerBarLine.current.clientHeight - scrollerBarRef.current.clientHeight

        scrollHandler()
        function scrollHandler() {
            let progress = 0
            if (addOverlayTag && scrollerRef.current) {
                progress =
                    scrollerRef.current.scrollTop /
                    (scrollerRef.current.children[0].clientHeight -
                        scrollerRef.current.offsetHeight)
            } else {
                progress = window.scrollY / (document.body.scrollHeight - window.innerHeight)
            }

            setScrollYProgress(progress)
            setCurrPosition(scrollHeight * scrollYProgress)
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
                <div ref={scrollerBarLine} className={styles.scroller_line}>
                    <div
                        ref={scrollerBarRef}
                        className={styles.scroller_bar}
                        style={{ top: `${currPosition}px` }}
                    ></div>
                </div>
            </div>
        )
    }

    return (
        <>
            {children}
            <div ref={scrollerBarLine} className={styles.scroller_line}>
                <div
                    ref={scrollerBarRef}
                    className={styles.scroller_bar}
                    style={{ top: `${currPosition}px` }}
                ></div>
            </div>
        </>
    )
}

export default Scroller
