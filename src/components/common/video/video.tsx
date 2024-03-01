'use client'
import { useRef, useEffect, useState } from 'react'

import styles from './video.module.css'

const Video = () => {
    const videoTag = useRef<HTMLVideoElement>(null)
    const playBtn = useRef<HTMLDivElement>(null)
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        if (!videoTag.current || !playBtn.current) return
        const video = videoTag.current
        const playButton = playBtn.current

        video.addEventListener('timeupdate', updateProgress)
        playButton.addEventListener('click', playHandler)

        return () => {
            video.removeEventListener('timeupdate', updateProgress)
            playButton.removeEventListener('click', playHandler)
        }
    }, [videoTag])

    function updateProgress() {
        if (!videoTag.current) return

        const currTime = Math.round(videoTag.current.currentTime)
        setProgress((100 * currTime) / videoTag.current.duration)

        console.log(currTime)
    }

    function playHandler() {
        if (!videoTag.current) return

        if (videoTag.current.paused) {
            videoTag.current.play()
        } else {
            videoTag.current.pause()
        }
    }

    function timeConverter(time: number): string {
        console.log(time)

        const minutes = Math.floor(time / 60)
        const seconds = Math.floor(time - minutes)

        console.log(time);
        

        console.log(`${minutes}:${seconds}`);
        

        return '10:10'
    }

    timeConverter(65)
    

    return (
        <div className={styles.video_placement}>
            <video ref={videoTag} src='/video/video_test.mp4' muted></video>
            <div className={styles.control_bar}>
                <div className={styles.progressLine}>
                    <div className={styles.current_progress} style={{ width: `${progress}%` }}></div>
                </div>
                <div className={styles.time}>
                    <div className={styles.curr_time}>15:00</div>
                    <div>/</div>
                    <div className={styles.total_time}>25:00</div>
                </div>
            </div>
            <div ref={playBtn} className={styles.play_btn}></div>
        </div>
    )
}

export default Video
