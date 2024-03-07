import type { ReactElement } from 'react'
import { motion } from 'framer-motion'

const animation = {
    hidden: {
        opacity: 0,
        y: '20vh',
    },
    visible: (custom: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: custom ? custom : 0,
        },
    }),
}

const FadeInOnScroll = ({ children, delay, className }: { children: ReactElement, delay?: number, className?: string }) => {
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
