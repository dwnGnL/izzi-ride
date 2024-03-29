export default function getDeviceType() {
    if (typeof window === 'undefined') return

    if (window.innerWidth <= 425) return 'mobile'
    if (window.innerWidth > 768) return 'desktop'
    
    return 'tablet'
}
