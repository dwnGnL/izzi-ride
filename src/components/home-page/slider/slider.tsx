'use client'
import type { FC } from 'react'
import type { Worker } from '@type/team.type'

import { useState, useRef, useEffect } from 'react'
import Scroller from '@common/scroller/scroller'
import AnimBlock from '@hoc/animated-block/animated-block'

import { FOUNDER } from '@constants/section'
import { workers } from '@constants/team'
import styles from './slider.module.css'

type SlideProps = Worker & {
    slidesRef: HTMLDivElement[]
    index: number
}

const Slider: FC = () => {
    const [currSlide, setCurrSlide] = useState(0)
    const [slidePosition, setSlidePosition] = useState(0)
    const sliderWrapperRef = useRef<HTMLDivElement>(null)
    const sliderRef = useRef<HTMLDivElement>(null)
    const slidesRef = useRef<HTMLDivElement[]>([])

    useEffect(() => {
        if (!sliderRef.current || !sliderWrapperRef.current) return

        const gap: number = parseInt(window.getComputedStyle(sliderRef.current).gap)
        const sliderWidth = sliderRef.current.offsetWidth
        const slideWidth = slidesRef.current[0].offsetWidth
        const maxWidth = sliderWidth - sliderWrapperRef.current.offsetWidth
        const currPosition = currSlide * slideWidth + gap * currSlide

        slidesRef.current[currSlide].classList.add(styles.active)
        setSlidePosition(currPosition >= maxWidth ? maxWidth : currPosition)
    }, [currSlide])

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
        <section className={styles.owners_section} data-title={FOUNDER}>
            <AnimBlock>
                <h2 className={styles.headline}>Application Creation History</h2>
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
                        {workers
                            .filter(worker => worker.isFounder)
                            .map((owner, index) => (
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
            <div className={styles.image} style={{ backgroundImage: `url(${image.src})` }} />

            <div className={styles.slider_copy}>
                {about ? (
                    <>
                        <div className={styles.quotes}></div>
                        <Scroller className={styles.scroller}>
                            <div className={styles.about} dangerouslySetInnerHTML={{ __html: about }} />
                        </Scroller>
                    </>
                ) : null}
                <strong className={styles.name}>{name}</strong>
                <div className={styles.position}>{position}</div>
            </div>
        </div>
    )
}

export default Slider
