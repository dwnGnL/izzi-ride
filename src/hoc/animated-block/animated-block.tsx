'use client'
import type { ReactNode } from 'react'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

import styles from './animated-block.module.css'

type InViewComponent = {
    children: ReactNode
    className?: string
    inViewExtraClass?: string
}

const AnimBlock = ({ children, className, inViewExtraClass }: InViewComponent) => {
    const animationRef = useRef<HTMLDivElement>(null)
    const inView = useInView(animationRef, { once: true, margin: '0px 0px -150px 0px' })

    const classNames = `${styles.anim_block} ${inView ? styles.in_view : ''} ${
        className ? className : ''
    } ${inViewExtraClass && inView ? inViewExtraClass : ''}`

    return (
        <div ref={animationRef} className={classNames}>
            {children}
        </div>
    )
}

export default AnimBlock
