import Introduction from '@components/main-page/introduction/introduction'
import About from '@components/main-page/about/about'
import Features from '@components/main-page/features/features'
import Slider from '@components/main-page/slider/slider'
import DownloadAt from '@components/main-page/download-at/download-at'
import ContactUs from '@components/main-page/contact-us/contact-us'

const Home = () => {
    return (
        <>
            <Introduction />
            <About />
            <Features />
            <Slider />
            <DownloadAt />
            <ContactUs />
        </>
    )
}

export default Home
