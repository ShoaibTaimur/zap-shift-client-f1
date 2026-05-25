type ReviewData = {
    review: string;
    userName: string;
    user_photoURL: string;
};

type ReviewProps = {
    reviews: ReviewData;
};

const Review = ({reviews}: ReviewProps) => {
    const reviewsData = reviews?.review;
    const userNameData = reviews?.userName;
    const user_photoURLData = reviews?.user_photoURL;

    const review=typeof reviewsData === "string"? reviewsData : "";
    const username=typeof userNameData === "string"? userNameData : "";
    const photoURL=typeof user_photoURLData === "string"? user_photoURLData : "";

    return (
        <div className="min-h-[190px] rounded-[1.35rem] bg-white p-5 shadow-[0_14px_32px_rgba(15,23,42,0.06)] md:p-6">
            <p className="text-[13px] leading-6 text-[#606060] md:text-[15px]">{review}</p>
            <div className="my-3.5 border border-dashed border-[#03373D]/25"></div>
            <div className="flex items-center gap-4">
                <img className="h-11 w-11 rounded-full object-cover ring-3 ring-[#F4FBFB] md:h-12 md:w-12" src={photoURL} alt="photoURL" />
                <p className="text-[15px] font-bold text-[#03373D] md:text-[17px]">{username}</p>
            </div>
        </div>
    );
};

export default Review;
