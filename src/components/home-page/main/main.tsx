'use client'
import { useEffect, useRef, useState } from 'react'

import useDevice from '@hooks/use-device'

import styles from './main.module.css'

const Main = () => {
	const device = useDevice()

	return (
		<section className={styles.section} data-title='main'>
			<div className={styles.lines_wrapper}>
				<Lines direction={1} />
				<Lines direction={-1} />
				<Lines direction={1} />
				{device === 'desktop' && <Lines direction={-1} />}
			</div>
		</section>
	)
}

const Lines = ({ direction }: { direction: 1 | -1 }) => {
	const lineRef = useRef<HTMLDivElement>(null)
	const anim = useRef<number>()
	const [moveSize, setMoveSize] = useState(0)

	useEffect(() => {
		anim.current = requestAnimationFrame(() => {
			moving()
		})

		function moving() {
			setMoveSize(size => {
				const lineGap = lineRef.current
					? parseInt(window.getComputedStyle(lineRef.current).gap)
					: 0
				const lineWidth = (lineRef.current?.clientWidth || 0) + lineGap

				return size >= lineWidth ? 0 : (size += 1)
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
					<Item copy='Find your onw route' />
					<Item copy='Trip, enjoy and successes' />
					<Item copy='Choose a route and time' />
					<Item copy='Find your onw route' />
					<Item copy='Trip, enjoy and successes' />
					<Item copy='Choose a route and time' />
				</div>
				<div ref={lineRef} className={styles.list_block}>
					<Item copy='Find your onw route' />
					<Item copy='Trip, enjoy and successes' />
					<Item copy='Choose a route and time' />
					<Item copy='Find your onw route' />
					<Item copy='Trip, enjoy and successes' />
					<Item copy='Choose a route and time' />
				</div>
				<div className={styles.list_block}>
					<Item copy='Find your onw route' />
					<Item copy='Trip, enjoy and successes' />
					<Item copy='Choose a route and time' />
					<Item copy='Find your onw route' />
					<Item copy='Trip, enjoy and successes' />
					<Item copy='Choose a route and time' />
				</div>
			</ul>
		</div>
	)
}

const Item = ({ copy }: { copy: string }) => {
	return (
		<li className={styles.item}>
			<div className={styles.image}></div>
			<div className={styles.copy}>{copy}</div>
		</li>
	)
}

export default Main
