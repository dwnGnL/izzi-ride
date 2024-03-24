'use client'
import { useEffect, useRef, useState } from 'react'

import DownloadAtButtons from '@common/download-at-buttons/download-at-buttons'

import styles from './main.module.css'

type LineData = {
    image: string
    copy: string
}

const Main = () => {
    return (
        <section className={styles.section} data-title='main'>
            <div className={styles.lines_wrapper}>
                <Lines direction={1} />
                <Lines direction={-1} />
                <Lines direction={1} />
            </div>
            <div className={styles.inner}>
                <h1 className={styles.headline}>
                    Do you often drive to
                    <br /> another state by car?
                    <br /> Then sage with iZZi RIDE
                </h1>

                <DownloadAtButtons type='light' />
            </div>
        </section>
    )
}

const Lines = ({ direction }: { direction: 1 | -1 }) => {
    const lineRef = useRef<HTMLDivElement>(null)
    const anim = useRef<number>()
    const [moveSize, setMoveSize] = useState(0)
    const lineData = useRef<LineData[]>([])

    useEffect(() => {
        const copies = [
            'Find your onw route',
            'Trip, enjoy and successes',
            'Choose a route and time',
            'Find your onw route',
            'Trip, enjoy and successes',
        ]

        anim.current = requestAnimationFrame(() => {
            moving()
        })

        lineData.current = getArrayWithRandom({ length: 5, maxNumber: 11 }).map<LineData>(
            (image, index) => ({
                image: image.toString(),
                copy: copies[index],
            }),
        )

        function moving() {
            setMoveSize(size => {
                const lineGap = lineRef.current
                    ? parseInt(window.getComputedStyle(lineRef.current).gap)
                    : 0
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
            <ul
                className={styles.line_list}
                style={{ transform: `translateX(${moveSize * direction}px)` }}
            >
                <div className={styles.list_block}>
                    {lineData.current.map(item => (
                        <Item image={item.image} copy={item.copy} key={`item-${item.image}`} />
                    ))}
                </div>
                <div ref={lineRef} className={styles.list_block}>
                    {lineData.current.map(item => (
                        <Item image={item.image} copy={item.copy} key={`item-${item.image}`} />
                    ))}
                </div>
                <div className={styles.list_block}>
                    {lineData.current.map(item => (
                        <Item image={item.image} copy={item.copy} key={`item-${item.image}`} />
                    ))}
                </div>
            </ul>
        </div>
    )
}

const Item = ({ image, copy }: LineData) => {
    return (
        <li className={styles.item}>
            <div
                className={styles.image}
                style={{ backgroundImage: `url(/images/home-page/main-component/${image}.png)` }}
            ></div>
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
