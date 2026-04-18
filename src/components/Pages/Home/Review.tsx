const Review = ({reviews}) => {
    const reviewsData = reviews?.review;
    const userNameData =reviews?.userName;
    const user_photoURLData=reviews?.user_photoURL;

    const review=typeof reviewsData === "string"? reviewsData : "";
    const username=typeof userNameData === "string"? userNameData : "";
    const photoURL=typeof user_photoURLData === "string"? user_photoURLData : "";

    return (
        <div className="bg-white p-5 rounded-2xl">
            <p className="text-[14px] md:text-[16px] text-[#606060]">{review}</p>
            <div className="border border-[#03373D] border-dashed my-3"></div>
            <div className="flex gap-4 items-center">
                <img className="rounded-full w-14" src={photoURL} alt="photoURL" />
                <p className="text-[16px] md:text-[18px] text-[#03373D] font-bold">{username}</p>
            </div>
        </div>
    );
};

export default Review;