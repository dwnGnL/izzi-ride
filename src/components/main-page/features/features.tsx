import type { FC } from 'react'

import Image from 'next/image'
import FadeInOnScroll from '@hoc/fade-in-on-scroll'

import useDevice from '@hooks/use-device'

import { featureList } from './constant'
import styles from './features.module.css'

export type Feature = {
    icon: any
    title: string
    copy: string
}

type FeatureProps = Feature & {
    index: number
}

const Features = () => {
    return (
        <section className={styles.coming_soon_section} data-title='features'>
            <FadeInOnScroll>
                <>
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
                </>
            </FadeInOnScroll>
        </section>
    )
}

const Feature: FC<FeatureProps> = ({ icon, title, copy, index }) => {
    const device = useDevice()
    const delay = device === 'desktop' ? index * 0.3 : 0

    return (
		<FadeInOnScroll delay={delay} className={styles.feature}>
			<li>
				<Image src={icon} alt={title} className={styles.icon} />
				<div className={styles.title}>{title}</div>
				<div className={styles.copy}>{copy}</div>
			</li>
		</FadeInOnScroll>
    )
}

export default Features
