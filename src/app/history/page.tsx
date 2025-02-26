import React from "react";

const Agenda: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-gray-100 min-h-screen" id="services">
      {/* Heading Section */}
      <div className="text-center mb-16">
        <span className="text-sm uppercase tracking-widest text-blue-600">
          BEST Mostar
        </span>
        <h2 className="text-4xl font-semibold text-blue-800 mt-4">
          JOBFAIR KROZ GODINE
        </h2>
      </div>

      {/* Agenda Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-12">
        {/* Day 1 */}
        <div className="p-8 bg-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
          <h3 className="text-xl font-semibold text-blue-700 mb-4">JobFair & Softskill Academy 2024</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Nihil est in intellectu quod non prius fuerit in sensu. Amor vincit
            omnia, et nos cedamus amori.
          </p>
        </div>

        {/* Day 2 */}
        <div className="p-8 bg-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
          <h3 className="text-xl font-semibold text-blue-700 mb-4">JobFair & Hackathon 2023</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Nihil est in intellectu quod non prius fuerit in sensu. Amor vincit
            omnia, et nos cedamus amori.
          </p>
        </div>

        {/* Day 3 */}
        <div className="p-8 bg-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
          <h3 className="text-xl font-semibold text-blue-700 mb-4">JobFair & Hackathon 2022 </h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Nihil est in intellectu quod non prius fuerit in sensu. Amor vincit
            omnia, et nos cedamus amori.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Agenda;
