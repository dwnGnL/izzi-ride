import Main from '@components/home-page/main/main'
import About from '@components/home-page/about/about'
import Features from '@components/home-page/features/features'
import Slider from '@components/home-page/slider/slider'
import DownloadAt from '@components/home-page/download-at/download-at'
import ContactUs from '@components/home-page/contact-us/contact-us'

const Home = () => {
    return (
        <main data-page='home'>
            <Main />
            <About />
            <Features />
            <Slider />
            <DownloadAt />
            <ContactUs />
        </main>
    )
}

export default Home
