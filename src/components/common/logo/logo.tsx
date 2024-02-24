import Image from 'next/image'
import Link from 'next/link'
import logo from '@public/logo.png'

import styles from './logo.module.css'

const Logo = () => {
	return (
		<Link href='/' title='IZZI'>
			<Image src={logo} alt='izzi logo' className={styles.logo} />
		</Link>
	)
}

export default Logo
