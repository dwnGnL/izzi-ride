import Image from 'next/image'
import DownloadAtButtons from '@common/download-at-buttons/download-at-buttons'

import phones from '@public/images/download-at-phones.png'

import styles from './download-at.module.css'

const DownloadAt = () => {
	return (
		<section className={styles.download_section}>
			<div>
				<Image src={phones} alt='Download IZZI RIDE' className={styles.image} />
				<h2 className={styles.headline}>Ready To Get Started?</h2>
				<div className={styles.text}>Get it and enjoy your trip</div>
				<DownloadAtButtons type='light' className={styles.buttons} />
			</div>
		</section>
	)
}

export default DownloadAt
