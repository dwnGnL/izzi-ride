'use client'
import useSectionsPosition from '@hooks/use-sections-position'
import AnimBlock from '@hoc/animated-block/animated-block'

import Image from 'next/image'
import Button from '@common/button/button'

import scrollTo from '@helpers/scroll-to'

import car from '@public/images/home-page/car.png'
import styles from './introduction.module.css'

const Introduction = () => {
	const sectionPositions = useSectionsPosition()

	function scroll() {
        scrollTo(sectionPositions['download at'].top)
	}

	return (
		<section className={styles.section} data-title='introduction'>
			<AnimBlock inViewExtraClass={styles.in_view}>
				<div className={styles.image}>
					<Image
						src={car}
						alt='car'
						className={styles.car}
					/>
				</div>

				<h2 className={styles.headline}>
					Do you often drive
					<br /> to another state by car?
					<br /> Then sage with
					<br /> iZZi RIDE
				</h2>

				<Button title='Download app' className={styles.download_btn} callback={scroll} />
			</AnimBlock>
		</section>
	)
}

export default Introduction
