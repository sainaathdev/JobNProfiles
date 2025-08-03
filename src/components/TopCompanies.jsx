const companies = [
  {
    name: "Google",
    openings: 23,
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Microsoft",
    openings: 15,
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    name: "TCS",
    openings: 30,
    logo: "https://www.tcs.com/content/dam/global-tcs/en/images/who-we-are/media-kit/tcs-light-logo.png",
  },
  {
    name: "Infosys",
    openings: 12,
    logo: "https://static.vecteezy.com/system/resources/previews/020/190/469/non_2x/infosys-logo-infosys-icon-free-free-vector.jpg",
  },
];

const TopCompanies = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Top Companies Hiring</h2>
        <p className="text-gray-600 mb-10">
          Join thousands of professionals at leading companies
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {companies.map((company, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded shadow hover:shadow-md transition text-center flex flex-col items-center"
            >
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="h-12 mb-4"
              />
              <h3 className="text-xl font-semibold">{company.name}</h3>
              <p className="text-gray-600">{company.openings} Openings</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <button className="text-orange-500 cursor-pointer  font-medium hover:underline text-lg">
            View All Companies &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopCompanies;
