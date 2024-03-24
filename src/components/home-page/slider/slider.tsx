'use client'
import type { FC } from 'react'

import { useState, useRef, useEffect } from 'react'
import AnimBlock from '@hoc/animated-block/animated-block'
import Image from 'next/image'
import useDevice from '@hooks/use-device'

import { owners } from './constant'
import styles from './slider.module.css'

export type Slide = {
    image: string
    about: string
    name: string
    position: string
}

type SlideProps = Slide & {
    slidesRef: HTMLDivElement[]
    index: number
}

const Slider: FC = () => {
    const [currSlide, setCurrSlide] = useState(0)
    const [slidePosition, setSlidePosition] = useState(0)
    const sliderWrapperRef = useRef<HTMLDivElement>(null)
    const sliderRef = useRef<HTMLDivElement>(null)
    const slidesRef = useRef<HTMLDivElement[]>([])
    const device = useDevice()

    useEffect(() => {
        if (!sliderRef.current || !sliderWrapperRef.current) return

        const gap: number = parseInt(window.getComputedStyle(sliderRef.current).gap)
        const sliderWidth = sliderRef.current.offsetWidth
        const slideWidth = slidesRef.current[0].offsetWidth
        const maxWidth = sliderWidth - sliderWrapperRef.current.offsetWidth
        const currPosition = currSlide * slideWidth + gap * currSlide

        slidesRef.current[currSlide].classList.add(styles.active)
        setSlidePosition(currPosition >= maxWidth ? maxWidth : currPosition)
    }, [currSlide, device])

    function nextSlide() {
        const activeSlide = checkIndex(currSlide + 1)
        if (activeSlide === currSlide) return
        slidesRef.current[currSlide].classList.remove(styles.active)
        setCurrSlide(activeSlide)
    }

    function prevSlide() {
        const activeSlide = checkIndex(currSlide - 1)
        if (activeSlide === currSlide) return
        slidesRef.current[currSlide].classList.remove(styles.active)
        setCurrSlide(activeSlide)
    }

    function checkIndex(index: number) {
        const length = slidesRef.current.length
        if (index > length - 1) return length - 1
        return index > length - 1 ? length - 1 : index < 0 ? 0 : index
    }

    return (
        <section className={styles.owners_section} data-title='owners'>
            <AnimBlock>
                <h1 className={styles.headline}>Application Creation History</h1>
                <div className={styles.arrows}>
                    <div className={`${styles.slider_arrow} ${styles.prev}`} onClick={prevSlide}></div>
                    <div className={`${styles.slider_arrow} ${styles.next}`} onClick={nextSlide}></div>
                </div>
                <div ref={sliderWrapperRef} className={styles.slider}>
                    <div
                        ref={sliderRef}
                        className={`${styles.slider_inner} ${currSlide >= 2 ? styles.lastSlide : ''}`}
                        style={{ transform: `translateX(-${slidePosition}px)` }}
                    >
                        {owners.map((owner, index) => (
                            <Slide
                                key={owner.name}
                                image={owner.image}
                                name={owner.name}
                                position={owner.position}
                                about={owner.about}
                                slidesRef={slidesRef.current}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </AnimBlock>
        </section>
    )
}

const Slide: FC<SlideProps> = ({ image, name, position, about, slidesRef, index }) => {
    const slide = useRef(null)

    useEffect(() => {
        if (slide.current) slidesRef[index] = slide.current
    }, [slidesRef, index])

    return (
        <div className={styles.slide} ref={slide}>
            {/* <Image src={image} alt={name} className={styles.image} /> */}
            <div className={styles.image} />
            <div className={styles.slider_copy}>
                <div className={styles.quotes}></div>
                <div className={styles.about} dangerouslySetInnerHTML={{ __html: about }} />
                <strong className={styles.name}>{name}</strong>
                <div className={styles.position}>{position}</div>
            </div>
        </div>
    )
}

export default Slider
