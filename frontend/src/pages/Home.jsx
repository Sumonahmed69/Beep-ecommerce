
import BestSeller from '../components/BestSeller';
import Hero from '../components/Hero/Hero';
import LatestCollection from '../components/LatestCollection/LatestCollection';
import NeswletterBox from '../components/NeswletterBox';
import OurPolicy from '../components/OurPolicy';

const Home = () => {
    return (
        <div>
            <Hero/>
            <LatestCollection/>
            <BestSeller/>
            <OurPolicy/>
            <NeswletterBox/>
        </div>
    );
};

export default Home;