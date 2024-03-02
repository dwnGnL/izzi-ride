import type { FC } from 'react'

import { aboutList } from './constant'

import styles from './about.module.css'

export type About = {
	headline: string
	copy: string
}

const About = () => {
	return (
		<section className={styles.about_section}>
			{aboutList.map((about, index) => {
				return (
					<AboutItem
						key={`about-${index}`}
						headline={about.headline}
						copy={about.copy}
					/>
				)
			})}
		</section>
	)
}

const AboutItem: FC<About> = ({ headline, copy }) => {
	return (
		<div className={styles.about}>
			<div className={styles.media}></div>
			<h1 className={styles.headline}>{headline}</h1>
			<div className={styles.copy}>{copy}</div>
		</div>
	)
}

export default About
