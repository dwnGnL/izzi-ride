import Image from 'next/image'
import Link from 'next/link'
import logo from '@public/images/logo.png'

import styles from './logo.module.css'

const Logo = ({ extraClass }: { extraClass?: string }) => {
	return (
		<Link href='/' title='IZZI' className={extraClass}>
			<Image src={logo} alt='izzi logo' className={styles.logo} priority />
		</Link>
	)
}

export default Logo
