import type { FC } from 'react'

import Image from 'next/image'
import AnimBlock from '@hoc/animated-block/animated-block'

import { FEATURES } from '@constants/section'
import { featureList } from './constant'
import styles from './features.module.css'

export type Feature = {
    icon: any
    title: string
    copy: string
}

const Features = () => {
    return (
        <section className={styles.coming_soon_section} data-title={FEATURES}>
            <AnimBlock inViewExtraClass={styles.in_view}>
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
            </AnimBlock>
        </section>
    )
}

const Feature: FC<Feature> = ({ icon, title, copy }) => {
    return (
        <AnimBlock className={styles.feature}>
            <li>
                <Image src={icon} alt={title} className={styles.icon} />
                <div className={styles.title}>{title}</div>
                <div className={styles.copy}>{copy}</div>
            </li>
        </AnimBlock>
    )
}

export default Features
