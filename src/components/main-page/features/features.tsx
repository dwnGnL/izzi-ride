import type { FC } from 'react'
import { motion } from 'framer-motion'

import Image from 'next/image'
import { featureList } from './constant'

import styles from './features.module.css'

export type Feature = {
	icon: any
	title: string
	copy: string
	index: number
}

const animation = {
	hidden: {
		opacity: 0,
		y: 100,
	},
	visible: (custom: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: custom * 0.3
		}
	})
}

const Features = () => {
	return (
		<motion.section
			initial="hidden"
			whileInView="visible"
			variants={animation}
			viewport={{ amount: 0.4, once: true }}
			className={styles.coming_soon_section}
			data-title={'features'}
		>
			<h3 className={styles.headline}>Coming soon</h3>
			<ul className={styles.feature_list}>
				{featureList.map((feature, index) => {
					return (
						<Feature
							key={`feature-${index}`}
							icon={feature.icon}
							title={feature.title}
							copy={feature.copy}
							index={index}
						/>
					)
				})}
			</ul>
		</motion.section>
	)
}

const Feature: FC<Feature> = ({ icon, title, copy, index }) => {
	return (
		<motion.li custom={index} variants={animation} className={styles.feature}>
			<Image src={icon} alt={title} className={styles.icon} />
			<div className={styles.title}>{title}</div>
			<div className={styles.copy}>{copy}</div>
		</motion.li>
	)
}

export default Features
