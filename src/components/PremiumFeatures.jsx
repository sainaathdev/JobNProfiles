import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faUserTie,
  faLink,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";

const features = [
  {
    title: "Unlimited Job Postings",
    description: "Post as many jobs as you like and reach more candidates.",
    icon: faBriefcase,
  },
  {
    title: "Hotlist Access",
    description: "View and manage premium candidate lists easily.",
    icon: faUserTie,
  },
  {
    title: "LinkedIn Integration",
    description: "Sync your listings with LinkedIn effortlessly.",
    icon: faLink,
  },
  {
    title: "Apollo Integration",
    description: "Access millions of professional profiles directly.",
    icon: faDatabase,
  },
];

const PremiumFeatures = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-5">
          Premium Features
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Upgrade to our premium plan for exclusive features that enhance your
          hiring experience.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition flex flex-col items-center justify-center text-center h-64"
            >
              <FontAwesomeIcon
                icon={feature.icon}
                className="text-orange-500 text-4xl mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <button className="bg-orange-500 cursor-pointer text-white px-6 py-3 rounded-full hover:bg-orange-600 transition">
            Explore Premium Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default PremiumFeatures;
