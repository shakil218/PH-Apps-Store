import { Star, Download } from "lucide-react";

const TrendingApps = ({ apps }) => {
  return (
    <div className="bg-base-200 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Trending Apps
          </h2>
          <p className="text-gray-500 mt-2 text-sm">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {apps.map((app) => (
            <div
              key={app.id}
              className="bg-base-100 rounded-lg p-3 shadow-sm hover:shadow-md transition"
            >
              {/* Image */}
              <div className="w-full h-40 bg-gray-200 rounded-md mb-3 overflow-hidden">
                <img
                  src={app.image}
                  alt={app.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
                {app.name}
              </h3>

              {/* Bottom Info */}
              <div className="flex justify-between items-center mt-3">
                {/* Downloads */}
                <div className="flex items-center gap-1 text-green-600 text-xs bg-green-100 px-2 py-1 rounded">
                  <Download size={12} />
                  <span>{app.downloads}</span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 text-orange-500 text-xs bg-orange-100 px-2 py-1 rounded">
                  <Star size={12} fill="orange" />
                  <span>{app.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-10">
          <button className="btn bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white px-6">Show All</button>
        </div>
      </div>
    </div>
  );
};

export default TrendingApps;
