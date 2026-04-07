import hero from "../../assets/hero.png";
import google_play from "../../assets/google-play.png";
import apple from "../../assets/app-store.png";

const Banner = () => {
  return (
    <div className="bg-base-200 pt-12 md:pt-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
          We Build <br />
          <span className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            Productive
          </span>{" "}
          Apps
        </h1>

        {/* Description */}
        <p className="mt-4 text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
          At PH Apps Store, we craft innovative apps designed to make everyday
          life simpler, smarter, and more exciting. Our goal is to turn your
          ideas into digital experiences that truly make an impact.
        </p>

        {/* Store Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
          {/* Google Play */}
          <a
            href="#"
            className="flex items-center gap-3 bg-[#D2D2D2] text-black px-5 py-3 rounded-lg shadow-md hover:scale-105 transition"
          >
            {/* Google Play */}
            <img src={google_play} alt="Google Play" className="w-6 h-6" />
            <p className="text-sm font-semibold">Google Play</p>
          </a>

          {/* App Store */}
          <a
            href="#"
            className="flex items-center gap-3 bg-[#D2D2D2] text-black px-5 py-3 rounded-lg shadow-md hover:scale-105 transition"
          >
            <img src={apple} alt="App Store" className="w-6 h-6" />
            <p className="text-sm font-semibold">App Store</p>
          </a>
        </div>

        {/* Banner Image */}
        <div className="mt-12 flex justify-center">
          <img
            src={hero} // your image
            alt="PH Apps Store Banner"
            className="w-full max-w-md md:max-w-lg lg:max-w-xl object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
