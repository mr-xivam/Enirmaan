import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

import NavBar from '../components/Navbar/NavBar';


const Careers = () => {
  const jobs = [
    { id: 1, title: "Frontend Developer", location: "Remote", type: "Full-Time" },
    { id: 2, title: "Backend Developer", location: "Bangalore, India", type: "Full-Time" },
    { id: 3, title: "UI/UX Designer", location: "Remote", type: "Part-Time" },
    { id: 4, title: "Project Manager", location: "Hybrid", type: "Full-Time" }
  ];

  return (
    
    <div className="container mx-auto px-6 py-16">
      {<NavBar />}
      <section className="text-center mt-12 mb-12">
        <h1 className="text-4xl font-bold text-blue-900">Join Our Team</h1>
        <p className="mt-4 text-gray-600">
          At E-Nirmaan, we believe in growing together. Explore opportunities to make an impact!
        </p>
      </section>

      {/* Job Listings */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {jobs.map((job) => (
            <div key={job.id} className="p-6 shadow-lg rounded-lg bg-white">
              <h2 className="text-2xl font-semibold text-blue-800">{job.title}</h2>
              <p className="text-gray-600 mt-2">{job.location} | {job.type}</p>
              <button className="mt-2 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              <button className="mt-2 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
  <Link to="/apply">Apply Now</Link>
</button>

              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center mt-16">
        <p className="text-lg text-gray-700">
          Can't find a position that fits? Reach out to us!
        </p>
        <HashLink smooth to="/#contact">
          <button className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Contact Us
          </button>
        </HashLink>
      </section>
    </div>
  );
};

export default Careers;
