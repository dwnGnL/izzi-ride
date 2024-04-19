import type { Input } from '@type/form.type'
import type { FC } from 'react'

import { useState } from 'react'

import { motion, AnimatePresence } from 'framer-motion'

import styles from './select.module.css'

const optionsAnimation = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    },
}

const Select: FC<Input> = ({ type, name, required, options = [] }) => {
    const [opened, setOpened] = useState(false)
    const [value, setValue] = useState(options[0] || '')

    function valueHandler(e: any, newValue: string) {
		setValue(newValue)
    }

	function blur() {
		setOpened(false)
	}

	function focus() {
		setOpened(true)
	}

    return (
        <>
            <div className={styles.select_wrapper}>
                <input
                    type={type}
                    name={name}
                    required={required}
                    className={styles.select}
                    onFocus={focus}
                    onBlur={blur}
                    value={value}
                    readOnly
                />
                <div className={`${styles.arrow} ${opened ? styles.active : ''}`}></div>
            </div>
            <AnimatePresence>
                {opened && (
                    <motion.div
                        className={styles.options}
                        initial='hidden'
                        animate='visible'
                        exit='hidden'
                        variants={optionsAnimation}
                    >
                        {options.map(option => (
                            <div
                                key={option}
                                className={`${styles.option} ${option === value ? styles.active : ''}`}
                                onClick={(e) => valueHandler(e, option)}
                            >
                                {option}
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Select
