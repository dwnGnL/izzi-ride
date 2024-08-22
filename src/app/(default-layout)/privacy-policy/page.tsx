import type { FC } from 'react'

import { PRIVACY_POLICY } from '@constants/section'
import { paragraphs } from './constant'
import styles from './policy.module.css'

export type Paragraph = {
    title: string
    desc: string
    list?: ParagraphList[]
}

type ParagraphList = {
    listName: string
    listText: string
}

const PrivatePolicy = () => {
    return (
        <main>
            <section data-title={PRIVACY_POLICY} className={styles.section}>
                <PolicyHeader />

                {paragraphs.map(paragraph => (
                    <ParagraphItem key={paragraph.title} title={paragraph.title} desc={paragraph.desc} list={paragraph.list} />
                ))}
            </section>
        </main>
    )
}

const PolicyHeader = () => {
    return (
        <div className={styles.headline}>
            <h3>Privacy policy</h3>
            <div className={styles.sub_headline}>Updated and effective as of September 1, 2023</div>
        </div>
    )
}

const ParagraphItem: FC<Paragraph> = ({ title, desc, list }) => {
    return (
        <div className={styles.paragraph_item}>
            <h4>{title}</h4>
            <div dangerouslySetInnerHTML={{ __html: desc }} />

            { list && (
                <ul className={styles.paragraph_list}>
                    {list.map(listItem => {
                        return (
                            <li key={listItem.listName}>
                                <div className={styles.title}>{listItem.listName}</div>
                                <div className={styles.text}>{listItem.listText}</div>
                            </li>
                        )
                    })}
                </ul>
            )}
        </div>
    )
}

export default PrivatePolicy
