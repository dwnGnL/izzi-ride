import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

const animation = {
    hidden: {
        opacity: 0,
        y: '5vh',
    },
    visible: (custom: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: custom ? custom : 0,
            duration: 1,
        },
    }),
}

const FadeInOnScroll = ({ children, delay, className }: { children: ReactNode, delay?: number, className?: string }) => {
    return (
        <motion.div
            whileInView='visible'
            initial='hidden'
            variants={animation}
            viewport={{ once: true }}
            className={className}
            custom={delay}
        >
            {children}
        </motion.div>
    )
}

export default FadeInOnScroll
