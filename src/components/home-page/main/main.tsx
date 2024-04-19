'use client'
import type { StaticImageData } from 'next/image'

import { useEffect, useState } from 'react'
import getDeviceType from '@helpers/get-device-type'

import Image from 'next/image'
import DownloadAtButtons from '@common/download-at-buttons/download-at-buttons'

import { MAIN } from '@constants/section'
import { MAIN_HEADLINE } from '@constants/common-copy'
import { MainComponentData } from './constant'
import styles from './main.module.css'

export type LineItemData<T = string> = {
    copy: T extends [] ? string[] : string
    image: StaticImageData
}

const Main = () => {
    const [lines, setLines] = useState<LineItemData[][]>([])

    useEffect(() => {
        const linesLength = getDeviceType() === 'desktop' ? 4 : 3
        const arr: LineItemData[][] = []

        for (let i = 0; i < linesLength; i++) {
            arr.push(getShuffledData(7))
        }

        setLines(arr)
    }, [])

    return (
        <section className={styles.section} data-title={MAIN}>
            <div className={styles.lines_wrapper}>
                {lines.map((line, index) => (
                    <Lines data={line} key={`line-${index}`} />
                ))}
            </div>

            <Content />
        </section>
    )
}

const Content = () => {
    return (
        <div className={styles.content}>
            <h1 className={styles.headline} dangerouslySetInnerHTML={{ __html: MAIN_HEADLINE }}></h1>

            <DownloadAtButtons type='light' />
        </div>
    )
}

const Lines = ({ data }: { data: LineItemData[] }) => {
    return (
        <div className={styles.line}>
            <div className={styles.line_list_wrapper}>
                <ul className={styles.line_list}>
                    {data.map((item, index) => (
                        <Item image={item.image} copy={item.copy} key={`item-${item.copy}-${item.image}-${index}`} />
                    ))}
                </ul>
                <ul className={styles.line_list}>
                    {data.map((item, index) => (
                        <Item image={item.image} copy={item.copy} key={`item-${item.copy}-${item.image}-${index}`} />
                    ))}
                </ul>
                <ul className={styles.line_list}>
                    {data.map((item, index) => (
                        <Item image={item.image} copy={item.copy} key={`item-${item.copy}-${item.image}-${index}`} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

const Item = ({ image, copy }: LineItemData) => {
    return (
        <li className={styles.item}>
            <Image src={image} alt={copy} className={styles.image} />
            <div className={styles.copy}>{copy}</div>
        </li>
    )
}

function getShuffledData(length: number) {
    return shuffleArray(MainComponentData)
        .map<LineItemData>(item => ({
            ...item,
            copy: getRandomItemFromArray(item.copy),
        }))
        .slice(0, length)
}

function getRandomItemFromArray<T>(arr: T[]) {
    return arr[Math.round(Math.random() * (arr.length - 1))]
}

function shuffleArray<T>(arr: T[]) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }

    return arr
}

export default Main
