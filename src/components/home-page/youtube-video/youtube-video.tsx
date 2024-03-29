'use client'
import getDeviceType from '@helpers/get-device-type'

const videoFormats = {
    horizontal: 'https://www.youtube-nocookie.com/embed/RK_U9EwKoJo',
    vertical: 'https://www.youtube-nocookie.com/embed/ra6H9PdY00o',
}

const YouTubeVideo = () => {
    const videoUrl = getDeviceType() === 'desktop' ? videoFormats.vertical : videoFormats.horizontal

    return (
        <iframe
            src={`${videoUrl}?si=is6dbmK1A1XTpGdO&rel=0`}
            title='Why you should use iZZi RIDE?'
            allowFullScreen
        ></iframe>
    )
}

export default YouTubeVideo
