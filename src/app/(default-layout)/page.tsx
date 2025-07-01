import Main from '@components/home-page/main/main'
import Betta from '@components/home-page/betta/betta'
import About from '@components/home-page/about/about'
import Features from '@components/home-page/features/features'
import Slider from '@components/home-page/slider/slider'
import DownloadAt from '@components/home-page/download-at/download-at'
import ContactUs from '@components/home-page/contact-us/contact-us'
import TeamSection from '@components/home-page/team-section/team-section'

const Home = () => {
    return (
        <main data-page='home'>
            <Main />
            <Betta />
            <About />
            <Features />
            <Slider />
            <DownloadAt />
            <TeamSection />
            <ContactUs />
        </main>
    )
}

export default Home
