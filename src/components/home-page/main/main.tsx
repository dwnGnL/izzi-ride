'use client'
import type { StaticImageData } from 'next/image'

import { useEffect, useRef, useState } from 'react'

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
    const linesLength = 3

    useEffect(() => {
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
                    <Lines direction={index % 2 ? -1 : 1} data={line} key={`line-${index}`} />
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

const Lines = ({ data, direction }: { data: LineItemData[], direction: 1 | -1 }) => {
    const lineRef = useRef<HTMLUListElement>(null)
    const anim = useRef<number>()
    const [moveSize, setMoveSize] = useState(0)

    useEffect(() => {
        anim.current = requestAnimationFrame(() => {
            moving()
        })

        function moving() {
            setMoveSize(size => {
                const lineGap = lineRef.current ? parseInt(window.getComputedStyle(lineRef.current).gap) : 0
                const lineWidth = (lineRef.current?.clientWidth || 0) + lineGap

                return size >= lineWidth ? 0 : (size += 0.25)
            })

            anim.current = requestAnimationFrame(() => {
                moving()
            })
        }
    }, [])

    return (
        <div className={styles.line}>
            <div className={styles.line_list_wrapper} style={{ transform: `translateX(${moveSize * direction}px)` }}>
                <ul className={styles.line_list}>
                    {data.map((item, index) => (
                        <Item image={item.image} copy={item.copy} key={`item-${item.copy}-${item.image}-${index}`} />
                    ))}
                </ul>
                <ul ref={lineRef} className={styles.line_list}>
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

function getArrayWithRandom({ length, maxNumber }: { length: number; maxNumber: number }) {
    let arr: number[] = []

    for (let i = 0; i < maxNumber; i++) {
        arr.push(i)
    }

    shuffleArray(arr)

    return arr.slice(0, length)
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
