import Navbar from './components/navbar/Navbar.jsx';
import Hero from './components/hero/Hero.jsx';
import StatsBar from './components/statsBar/statsBar.jsx';
import Services from './components/services/services.jsx';
import HowItWorks from './components/howItWorks/howItWorks.jsx';
import WhyChooseUs from './components/whyChooseUs/whyChooseUs.jsx';
import Testimonials from './components/testimonials/testimonials.jsx';
import CtaBanner from './components/ctaBanner/ctaBanner.jsx';
import Footer from './components/footer/footer.jsx';

function App() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <StatsBar />
                <Services />
                <HowItWorks />
                <WhyChooseUs />
                <Testimonials />
                <CtaBanner />
            </main>
            <Footer />
        </>
    );
}

export default App;
