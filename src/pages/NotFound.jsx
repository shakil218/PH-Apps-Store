import { Link } from "react-router";
import notFoundImage from "../assets/error-404.png";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-xl w-full text-center">
        {/* Image / Illustration */}
        <img
          src={notFoundImage}
          alt="404 Illustration"
          className="w-48 md:w-64 mx-auto mb-6"
        />

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
          Oops, page not found!
        </h1>

        {/* Subtitle */}
        <p className="text-gray-500 text-sm md:text-base mb-6">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block px-6 py-2 rounded-lg bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white text-sm md:text-base font-semibold hover:opacity-90 transition duration-300"
        >
          Go Back!
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
