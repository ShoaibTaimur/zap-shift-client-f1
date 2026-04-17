import Banner from "./Banner";
import Services from "./Services";
import Works from "./Works";

const Home = () => {
    return (
        <div className="mt-8">
            <Banner />
            <Works />
            <Services />
        </div>
    );
};

export default Home;