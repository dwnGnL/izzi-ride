import type { FC } from 'react'

import Image from 'next/image'
import { featureList } from './constant'

import styles from './features.module.css'

export type Feature = {
	icon: any
	title: string
	copy: string
}

const Features = () => {
	return (
		<section className={styles.coming_soon_section}>
			<h3 className={styles.headline}>Coming soon</h3>
			<ul className={styles.feature_list}>
				{featureList.map((feature, index) => {
					return (
						<Feature
							key={`feature-${index}`}
							icon={feature.icon}
							title={feature.title}
							copy={feature.copy}
						/>
					)
				})}
			</ul>
		</section>
	)
}

const Feature: FC<Feature> = ({ icon, title, copy }) => {
	return (
		<li className={styles.feature}>
			<Image src={icon} alt={title} className={styles.icon} />
			<div className={styles.title}>{title}</div>
			<div className={styles.copy}>{copy}</div>
		</li>
	)
}

export default Features
