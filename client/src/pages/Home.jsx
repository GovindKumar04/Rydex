import { asset } from "../assets/index";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${asset.home})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="bg-[url({asset.home})] h-screen  pt-8 flex justify-between flex-col  w-full bg-red-400"
      >
        <img className="w-16 ml-8" src={asset.Rydex} alt="" />
        <div className="bg-white pb-7 py-4 px-4">
          <h2 className="text-[30px] font-bold text-center ">
            Get started with Rydex
          </h2>
          <Link to="/login" className="flex items-center justify-center w-full   bg-black text-white py-3 rounded-lg mt-5">
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
