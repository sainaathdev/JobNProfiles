const CTASection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-300 to-blue-400 py-20 text-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Ready to Land Your Dream Job?
        </h2>
        <p className="text-lg mb-6">
          Join thousands of job seekers using our platform to get hired at top
          companies!
        </p>
        <div className="flex justify-center">
          <button className="bg-white mr-5 cursor-pointer text-blue-700 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition">
            Get Started Now
          </button>
          <button className="bg-transparent cursor-pointer text-black-800 font-semibold px-6 py-3 rounded border border-black hover:bg-orange-300">
            Post a Job
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
