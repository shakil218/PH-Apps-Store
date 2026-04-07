import { FaFacebook, FaLinkedin, FaXTwitter, FaGithub } from "react-icons/fa6";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#031B34] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo + Text */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <img src={logo} alt="logo" className="w-8 h-8" />
              <span className="font-bold text-lg">HERO.IO</span>
            </div>
            <p className="text-sm text-gray-400 max-w-xs">
              Discover, share and explore the best applications in one place.
            </p>
          </div>

          {/* Social */}
          <div className="text-center md:text-right">
            <p className="mb-3 text-sm text-gray-300">Social Links</p>
            <div className="flex gap-5 justify-center md:justify-end text-xl">
              <a href="#" className="hover:text-indigo-400 transition">
                <FaGithub />
              </a>
              <a href="#" className="hover:text-indigo-400 transition">
                <FaLinkedin />
              </a>
              <a href="#" className="hover:text-indigo-400 transition">
                <FaXTwitter />
              </a>
              <a href="#" className="hover:text-indigo-400 transition">
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom */}
        <p className="text-center text-sm text-gray-500">
          Copyright © {new Date().getFullYear()} HERO.IO — All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
