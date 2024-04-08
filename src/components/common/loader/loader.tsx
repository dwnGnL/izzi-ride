'use client'
import { useState, useEffect } from 'react'
import styles from './loader.module.css'

const Loader = () => {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
            setLoading(true)
    }, [])

    return !loading ? (
        <div className={styles.loader_wrapper}>
            <div className={styles.loader}>
                <div className={styles.logo_letter} data-letter='i1'></div>
                <div className={styles.logo_letter} data-letter='z1'></div>
                <div className={styles.logo_letter} data-letter='z2'></div>
                <div className={styles.logo_letter} data-letter='i2'></div>
            </div>
        </div>
    ) : null
}

export default Loader
