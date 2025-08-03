import { FaHeart } from "react-icons/fa";

const jobs = [
  {
    title: "Frontend Developer",
    company: "Google",
    location: "Hyderabad",
    type: "Full-time",
    salary: "₹12-18 LPA",
    logo: "https://cdn-icons-png.flaticon.com/512/281/281764.png",
    postedDaysAgo: 2,
  },
  {
    title: "Backend Engineer",
    company: "Amazon",
    location: "Bangalore",
    type: "Full-time",
    salary: "₹10-16 LPA",
    logo: "https://cdn-icons-png.flaticon.com/512/732/732229.png",
    postedDaysAgo: 4,
  },
  {
    title: "Data Scientist",
    company: "TCS",
    location: "Pune",
    type: "Remote",
    salary: "₹8-12 LPA",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968870.png",
    postedDaysAgo: 1,
  },
  {
    title: "UI/UX Designer",
    company: "Infosys",
    location: "Chennai",
    type: "Part-time",
    salary: "₹6-9 LPA",
    logo: "https://cdn-icons-png.flaticon.com/512/732/732214.png",
    postedDaysAgo: 3,
  },
];

const FeaturedJobs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Featured Jobs</h2>
        <p className="text-center text-gray-600 mb-8">
          Explore our top job listings from leading companies. Find your perfect
          match today!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {jobs.map((job, idx) => (
            <div
              key={idx}
              className="relative border border-gray-200 rounded-lg p-6 hover:shadow-md transition text-center flex flex-col items-center"
            >
              <FaHeart className="absolute top-4 right-4 bg-transparent text-lg" />

              <img
                src={job.logo}
                alt={job.company}
                className="h-12 w-12 mb-4"
              />
              <h3 className="text-xl font-semibold mb-1">{job.title}</h3>
              <p className="text-gray-600">{job.company}</p>
              <p className="text-gray-500 text-sm">
                {job.location} · {job.type}
              </p>
              <p className="font-medium mt-2">{job.salary}</p>
              <p className="text-sm text-gray-400 mt-1">
                Posted {job.postedDaysAgo} day
                {job.postedDaysAgo > 1 ? "s" : ""} ago
              </p>
              <button className="mt-4 bg-blue-600 cursor-pointer text-white px-4 py-2 rounded hover:bg-blue-700">
                Apply Now
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="bg-orange-500 cursor-pointer text-white px-6 py-3 rounded-full hover:bg-orange-600 transition">
            View All Jobs
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
