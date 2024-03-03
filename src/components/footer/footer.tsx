import Link from 'next/link'
import Image from 'next/image'

import Logo from '@common/logo/logo'

import { infoList, navigation, socials } from './constant'

import styles from './footer.module.css'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Logo className={styles.footer_logo} />
			<Info />
			<Navigation />
			<Social />
			<BottomPart />
		</footer>
	)
}

const Info = () => {
	return (
		<ul className={styles.info_list}>
			{infoList.map(info => (
				<li key={info.title.toLowerCase()}>
					<span>{info.title}</span>:{' '}
					<span dangerouslySetInnerHTML={{ __html: info.value }} />
				</li>
			))}
		</ul>
	)
}

const Navigation = () => {
	return (
		<nav className={styles.navigation}>
			{navigation.map(navigationItem => (
				<Link
					href={navigationItem.href}
					title={navigationItem.title}
					key={navigationItem.title.toLowerCase()}
				>
					{navigationItem.title}
				</Link>
			))}
		</nav>
	)
}

const Social = () => {
	return (
		<ul className={styles.social}>
			{socials.map(social => (
				<li key={social.title.toLowerCase()}>
					<Link href={social.href} title={social.title} target='_blank'>
						<Image src={social.icon} alt={social.title} />
					</Link>
				</li>
			))}
		</ul>
	)
}

const BottomPart = () => {
	return (
		<div className={styles.bottom_part}>
			<div>© 2024 IZZI RIDE</div>
			<Link href='/' title='Privacy Policy'>
				Privacy Policy
			</Link>
		</div>
	)
}

export default Footer
