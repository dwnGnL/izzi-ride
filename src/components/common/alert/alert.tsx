import { useAppSelector, useAppDispatch } from '@hooks/store'
import { closeAlert } from '@store/alert/slice'

import Button from '@common/button/button'

import { motion, AnimatePresence } from 'framer-motion'
import styles from './alert.module.css'

const alertOverlay = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    },
}

const Alert = () => {
    const alert = useAppSelector(state => state.alert)
    const dispatch = useAppDispatch()

    function close() {
        dispatch(closeAlert())
    }

    return (
        <AnimatePresence>
            {alert.opened && (
                <motion.div
                    initial='hidden'
                    animate='visible'
                    exit='hidden'
                    variants={alertOverlay}
                    className={styles.overlay}
                    onClick={close}
                >
                    <div className={styles.alert} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.message}>{alert.message}</div>
                        <Button title='OK' className={styles.close_btn} callback={close} />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Alert
