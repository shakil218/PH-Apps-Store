import { Download, Star, AppWindow } from "lucide-react";

const StatsSection = () => {
  return (
    <div className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] py-12 md:py-16 px-4">
      <div className="max-w-5xl mx-auto text-center text-white">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold mb-10">
          Trusted By Millions, Built For You
        </h2>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-4">
          {/* Downloads */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 text-white/80 mb-2">
              <Download size={16} />
              <span className="text-xs md:text-sm">Total Downloads</span>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold">29.6M</h3>

            <p className="text-xs text-white/70 mt-2">
              21% More Than Last Month
            </p>
          </div>

          {/* Reviews */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 text-white/80 mb-2">
              <Star size={16} />
              <span className="text-xs md:text-sm">Total Reviews</span>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold">906K</h3>

            <p className="text-xs text-white/70 mt-2">
              46% More Than Last Month
            </p>
          </div>

          {/* Apps */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 text-white/80 mb-2">
              <AppWindow size={16} />
              <span className="text-xs md:text-sm">Active Apps</span>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold">132+</h3>

            <p className="text-xs text-white/70 mt-2">31 More Will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
