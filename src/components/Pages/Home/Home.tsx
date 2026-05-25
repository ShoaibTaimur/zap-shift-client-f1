import Banner from "./Banner";
import Brands from "./Brands";
import Reviews from "./Reviews";
import Services from "./Services";
import Works from "./Works";

const reviewPromise =fetch("/data/reviews.json")
.then(res=>res.json());

const Home = () => {
    return (
        <div className="mt-4 space-y-10 pb-10 md:mt-6 md:space-y-14 md:pb-14">
            <Banner />
            <Works />
            <Services />
            <Brands />
            <Reviews reviewPromise={reviewPromise} />
        </div>
    );
};

export default Home;
