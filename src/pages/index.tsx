import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Context from '../components/Context';
import Challenge from '../components/Challenge';
import Method from '../components/Method';
import Contact from '../components/Contact';


const Home = () => {
    return(
      <>
        <Navbar/>
        <Hero/>
        <AboutUs/>
        <Method/>
        <Context/>
        <Challenge/>
        <Contact/>
      </>
    )
}

export default Home;
