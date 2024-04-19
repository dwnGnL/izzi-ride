import styles from './loader.module.css'

const Loader = () => {
    return (
        <>
            <script async src='/scripts/loader.js' />
            
            <div id='loader' className={styles.loader_wrapper}>
                <div className={styles.loader}>
                    <div className={styles.logo_letter} data-letter='i1'></div>
                    <div className={styles.logo_letter} data-letter='z1'></div>
                    <div className={styles.logo_letter} data-letter='z2'></div>
                    <div className={styles.logo_letter} data-letter='i2'></div>
                </div>
            </div>
        </>
    )
}

export default Loader
