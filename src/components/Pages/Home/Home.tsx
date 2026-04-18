import Banner from "./Banner";
import Brands from "./Brands";
import Reviews from "./Reviews";
import Services from "./Services";
import Works from "./Works";

const reviewPromise =fetch("../../../../Resources/data/reviews.json")
.then(res=>res.json());

const Home = () => {
    return (
        <div className="mt-8">
            <Banner />
            <Works />
            <Services />
            <Brands />
            <Reviews reviewPromise={reviewPromise} />
        </div>
    );
};

export default Home;