import type { FC } from 'react'

import { aboutList } from './constant'

import styles from './about-block.module.css'

export type About = {
	tag: string
	headline: string
	copy: string
}

const AboutBlock = () => {
	return (
		<section className={styles.about_section}>
			{aboutList.map((about, index) => {
				return (
					<AboutItem
						key={`about-${index}`}
						tag={about.tag}
						headline={about.headline}
						copy={about.copy}
					/>
				)
			})}
		</section>
	)
}

const AboutItem: FC<About> = ({ tag, headline, copy }) => {
	return (
		<div className={styles.about}>
			<div className={styles.img}></div>
			<div className={styles.tag}>{tag}</div>
			<h1 className={styles.headline}>{headline}</h1>
			<div className={styles.copy}>{copy}</div>
		</div>
	)
}

export default AboutBlock
