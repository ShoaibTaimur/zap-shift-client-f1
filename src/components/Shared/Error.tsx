import errorImg from "../../../Resources/animations/error.json";
import { useLottie } from "lottie-react";

const Error = () => {
  const { View } = useLottie(
    {
      animationData: errorImg,
      loop: true,
    },
    {
      height: 200,
    },
  );

  return (
    <div className="flex flex-col items-center">
      {View}
      <h1 className="text-center font-bold text-[30px]">Error 404</h1>
    </div>
  );
};

export default Error;
