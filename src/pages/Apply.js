import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar/NavBar';

const Apply = () => {
  const navigate = useNavigate();

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    position: '',
    resume: null,
    coverLetter: ''
  });

  // Input Change Handler
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };

  // Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Your application has been submitted successfully!');
    navigate('/');
  };

  return (
    <div className="container mx-auto px-6 py-16">
      {<Navbar/>}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-900">Apply for the Position</h1>
        <p className="mt-4 text-gray-600">
          Please fill in the form below and attach your resume.
        </p>
      </section>

      {/* Application Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8"
        encType="multipart/form-data"
      >
        {/* Full Name */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="fullName">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Email */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Position */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="position">
            Position
          </label>
          <input
            type="text"
            name="position"
            id="position"
            placeholder="Position you are applying for"
            value={formData.position}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Resume Upload */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="resume">
            Upload Resume
          </label>
          <input
            type="file"
            name="resume"
            id="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded"
          />
        </div>

        {/* Cover Letter */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="coverLetter">
            Cover Letter
          </label>
          <textarea
            name="coverLetter"
            id="coverLetter"
            placeholder="Write your cover letter"
            value={formData.coverLetter}
            onChange={handleChange}
            rows="5"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default Apply;
