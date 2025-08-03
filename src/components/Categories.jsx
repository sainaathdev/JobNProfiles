import {
  FaCode,
  FaChartLine,
  FaPencilRuler,
  FaProjectDiagram,
  FaBullhorn,
  FaUsers,
  FaHandshake,
  FaMoneyBillWave,
} from "react-icons/fa";

const categories = [
  {
    name: "Software Development",
    icon: <FaCode className="text-2xl mb-2 text-blue-600" />,
    jobs: 124,
  },
  {
    name: "Data Science",
    icon: <FaChartLine className="text-2xl mb-2 text-purple-600" />,
    jobs: 89,
  },
  {
    name: "UI/UX Design",
    icon: <FaPencilRuler className="text-2xl mb-2 text-pink-500" />,
    jobs: 58,
  },
  {
    name: "Product Management",
    icon: <FaProjectDiagram className="text-2xl mb-2 text-green-600" />,
    jobs: 67,
  },
  {
    name: "Marketing",
    icon: <FaBullhorn className="text-2xl mb-2 text-orange-500" />,
    jobs: 92,
  },
  {
    name: "HR & Recruitment",
    icon: <FaUsers className="text-2xl mb-2 text-red-400" />,
    jobs: 41,
  },
  {
    name: "Sales",
    icon: <FaHandshake className="text-2xl mb-2 text-yellow-500" />,
    jobs: 76,
  },
  {
    name: "Finance & Accounting",
    icon: <FaMoneyBillWave className="text-2xl mb-2 text-green-500" />,
    jobs: 53,
  },
];

const Categories = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">
          Browse Job Categories
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Explore opportunities in your field.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {categories.map((category, idx) => (
            <div
              key={idx}
              className="border border-gray-300 rounded-md px-4 py-6 bg-gray-50 hover:bg-blue-50 text-center shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-center">{category.icon}</div>
              <h3 className="text-gray-800 font-semibold mt-2">
                {category.name}
              </h3>
              <p className="text-sm text-gray-500 mt-1">{category.jobs} Jobs</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
