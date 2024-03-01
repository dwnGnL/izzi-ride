'use client'
import { useRef, useEffect, useState } from 'react'

import styles from './video.module.css'

const Video = ({ src, showControls }: { src: string; showControls?: boolean }) => {
    const videoTag = useRef<HTMLVideoElement>(null)
    const playBtn = useRef<HTMLDivElement>(null)
    const [isPaused, setIsPaused] = useState(true)
    const [progress, setProgress] = useState(0)
    const [totalTime, setTotalTime] = useState(0)
    const [currTime, setCurrTime] = useState(0)

    useEffect(() => {
        if (!videoTag.current || !playBtn.current) return
        const video = videoTag.current
        const playButton = playBtn.current

        if (showControls) video.addEventListener('timeupdate', updateProgress)
        video.addEventListener('click', playHandler)
        playButton.addEventListener('click', playHandler)

        setTotalTime(Math.floor(video.duration))

        return () => {
            video.removeEventListener('timeupdate', updateProgress)
            video.removeEventListener('click', playHandler)
            playButton.removeEventListener('click', playHandler)
        }
    }, [videoTag, showControls])

    function updateProgress() {
        if (!videoTag.current) return
        const currTime = Math.round(videoTag.current.currentTime)
        setCurrTime(currTime)
        setProgress((100 * currTime) / videoTag.current.duration)
    }

    function playHandler() {
        if (!videoTag.current) return

        if (videoTag.current.paused) {
            videoTag.current.play()
            setIsPaused(false)
        } else {
            videoTag.current.pause()
            setIsPaused(true)
        }
    }

    function timeConverter(time: number): string {
        const minutes = Math.floor(time / 60)
        const seconds = Math.floor(time - minutes * 60)

        return `${minutes}:${addZero(seconds)}`
    }

    function addZero(number: number): string {
        return number < 10 ? `0${number}` : String(number)
    }

    return (
        <div className={`${styles.video_placement} ${isPaused ? styles.paused : styles.playing}`}>
            <div className={styles.video_inner}>
                <video ref={videoTag} src={src}></video>

                {showControls && (
                    <div className={styles.control_bar}>
                        <div className={styles.progressLine}>
                            <div className={styles.current_progress} style={{ width: `${progress}%` }}></div>
                        </div>
                        <div className={styles.time}>
                            <div className={styles.curr_time}>{timeConverter(currTime)}</div>
                            <div>/</div>
                            <div className={styles.total_time}>{timeConverter(totalTime)}</div>
                        </div>
                    </div>
                )}
            </div>
            <div ref={playBtn} className={styles.play_btn}></div>
        </div>
    )
}

export default Video
