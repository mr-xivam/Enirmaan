import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-gray-100 border-t py-8">
          <div className="grid sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-gray-200 lg:ml-11">
            
            {/* Logo and Address Block */}
            <div className="col-span-12 lg:col-span-4">
              <div className="flex items-center justify-start bg-gray-200 text-gray-600 p-3 rounded-lg xl:w-80 mx-auto">
                {/* Logo */}
                <img src="https://enirmaan.com/images/logo.png" alt="ENirmaan Logo" className="h-8 mr-3" />
                {/* Address and Text */}
                <div className="text-sm">
                  <h3 className="font-bold text-2xl mb-1">ENirmaan</h3>
                  <p className="font-semibold">Office Address</p>
                  <p>Unit No 1b 100, Phoenix Paragon Plaza Mall,</p>
                  <p>Lbs Marg, Kamani Junction, Kurla W, Mumbai Suburban,</p>
                  <p>Maharashtra, 400070</p>
                </div>
              </div>
            </div>

            {/* Other Content (Links, Services, Social Media) */}
            <div className="col-span-6 md:col-span-6 lg:col-span-2 mx-auto">
              <h6 className="text-[#013289] text-lg font-bold mb-4">LINKS</h6>
              <ul className="text-sm">
                <li className="mb-2">
                  <HashLink to="#" className="hover:text-gray-900 transition">About</HashLink>
                </li>
                <li className="mb-2">
                  <HashLink to="#" className="hover:text-gray-900 transition">Services</HashLink>
                </li>
                <li className="mb-2">
                  <HashLink to="#" className="hover:text-gray-900 transition">Contact</HashLink>
                </li>
              </ul>
            </div>

            <div className="col-span-6 md:col-span-6 lg:col-span-4 mx-auto">
              <h6 className="text-[#013289] text-lg font-bold mb-4">OUR SERVICES</h6>
              <ul className="text-sm">
                <li className="mb-2">
                  <Link to="#" className="hover:text-gray-900 transition">Web Development</Link>
                </li>
                <li className="mb-2">
                  <Link to="#" className="hover:text-gray-900 transition">Mobile App Development</Link>
                </li>
                <li className="mb-2">
                  <Link to="#" className="hover:text-gray-900 transition">Domain and Hosting</Link>
                </li>
                <li className="mb-2">
                  <Link to="#" className="hover:text-gray-900 transition">General IT Consultations</Link>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="col-span-12 lg:col-span-2 text-center">
              <h6 className="text-[#013289] text-lg font-bold mb-4">SOCIAL MEDIA</h6>
              <div className="flex justify-center space-x-4">
                <Link to="#" aria-label="Twitter" className="text-blue-900 hover:text-gray-500">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 32 32">
                    <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                  </svg>
                </Link>
                <Link to="#" aria-label="Facebook" className="text-blue-900 hover:text-gray-500">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 32 32">
                    <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-500">
              Copyright &copy; {new Date().getFullYear()}{" "}
              <Link to="#" className="hover:text-gray-700">mr-xivam</Link>. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
