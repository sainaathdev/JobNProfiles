// src/components/Footer.jsx
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaSuitcase,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold mb-3 ">
            JobPortal <FaSuitcase className="inline-block ml-1" />
          </h2>
          <p className="text-gray-400 text-sm">
            Connecting talent with opportunity. Explore thousands of job
            listings and build your career with us.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Jobs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Companies
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-blue-400" /> support@jobsnprofiles.com
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-green-400" /> +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-red-400" /> Hyderabad, India
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-orange-500">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-500">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-500">
              <FaLinkedinIn />
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-500">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
        © 2025 JobPortal . All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
