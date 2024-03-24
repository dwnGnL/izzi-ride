import styles from './loader.module.css'

export default function Loading() {
    return (
        <div className={styles.loader_wrapper}>
            <div>hello</div>
            <div className={styles.loader}>
                <div className={styles.logo_letter} data-letter='i1'></div>
                <div className={styles.logo_letter} data-letter='z1'></div>
                <div className={styles.logo_letter} data-letter='z2'></div>
                <div className={styles.logo_letter} data-letter='i2'></div>
            </div>
        </div>
    )
}
