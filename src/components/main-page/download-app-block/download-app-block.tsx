import Link from 'next/link'

import styles from './download-app-block.module.css'

const DownloadAppBlock = () => {
    return (
        <section className={styles.section}>
            <div className={styles.image}>
                <div className={styles.car}></div>
            </div>

            <h2 className={styles.headline}>
                Do you often drive
                <br /> to another state by car?
                <br /> Then earn with
                <br /> IZZI RIDE
            </h2>

            <Link href='/' className={styles.download_btn} download='Download app'>
                Download app
            </Link>
        </section>
    )
}

export default DownloadAppBlock
