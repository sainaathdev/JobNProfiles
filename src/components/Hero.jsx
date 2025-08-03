const Hero = () => {
  return (
    <div className="relative h-auto bg-orange-100 py-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-35"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1543269865-cbf427effbad')",
        }}
      ></div>

      {/* Content Overlay */}
      <div className="relative max-w-4xl mx-auto text-center px-4">
        <h1 className="text-5xl font-bold text-gray-900">
          Find Your Dream Job
        </h1>
        <p className="mt-2 text-lg text-gray-700">
          Connect with top companies and discover opportunities that match your
          skills and aspirations
        </p>

        {/* Search Card */}
        <div className="bg-white rounded-lg shadow-lg mt-6 p-6">
          <div className="flex flex-col sm:flex-row gap-3 items-center w-full">
            <input
              type="text"
              placeholder="Job title or keyword"
              className="border p-2 rounded w-full"
            />
            <input
              type="text"
              placeholder="City, state, or remote"
              className="border p-2 rounded w-full"
            />
            <button className="bg-orange-500 cursor-pointer text-white text-sm rounded hover:bg-orange-600 font-semibold w-full p-3">
              Search Jobs
            </button>
          </div>

          {/* Popular Searches */}
          <div className="mt-4 text-sm text-gray-500 text-left">
            <span className="font-medium text-gray-700">Popular searches:</span>
            <span className="mx-1 text-orange-500 cursor-pointer hover:underline">
              Software Engineer
            </span>
            <span className="mx-1 text-orange-500 cursor-pointer hover:underline">
              Data Scientist
            </span>
            <span className="mx-1 text-orange-500 cursor-pointer hover:underline">
              Product Manager
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-6 text-gray-700 font-semibold flex flex-col sm:flex-row justify-center gap-6 text-xl">
          <div>📄 50,000+ Active Jobs</div>
          <div>🏢 10,000+ Companies</div>
          <div>👤 7M+ Job Seekers</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
