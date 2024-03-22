import { useState, useEffect } from 'react'
import styles from './loader.module.css'

const Loader = () => {
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		function loadingHandler() {
			setLoading(true)
		}

		window.addEventListener('load', loadingHandler)

		return () => {
			window.removeEventListener('load', loadingHandler)
		}
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
