import Banner from "./Banner";
import Brands from "./Brands";
import Services from "./Services";
import Works from "./Works";

const Home = () => {
    return (
        <div className="mt-8">
            <Banner />
            <Works />
            <Services />
            <Brands />
        </div>
    );
};

export default Home;