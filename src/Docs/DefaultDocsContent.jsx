import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaNpm } from 'react-icons/fa';
import { AiOutlineLink } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const IntroductionPage = () => {
  return (
    <>
    <div className='mb-9 text-gray-400'>
      <h1 className="text-4xl font-bold mb-6 text-blue-500">
        Welcome to EZ Module
      </h1>
      <p className="text-lg mb-6">
        EZ Module is a comprehensive React component library designed to streamline your development process. Our library includes a variety of UI and feature-based components, crafted to enhance and simplify your web development projects.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-orange-400 ">
        What is EZ Module?
      </h2>
      <p className="text-base mb-6">
        EZ Module is an open-source library offering reusable React components tailored for various needs. Whether you need UI elements or complex feature components, EZ Module provides easy-to-use and customizable solutions for your projects.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-orange-400 ">
        How to Import and Use
      </h2>
      <p className="text-base mb-6">
        Getting started with EZ Module is simple. Install the library via npm:
        <br />
        <code className="bg-gray-800 p-2 rounded text-sm">npm install ezModule</code>
        <br />
        Import and use the components in your React project like this:
        <br />
        <code className="bg-gray-800 p-2 rounded text-sm">
          {/* import {{ FirstComp }} from 'ezModule'; */}
        </code>
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-gradient bg-gradient-to-r from-orange-400 via-red-300 to-pink-400 bg-clip-text text-transparent">
        Future Plans
      </h2>
      <p className="text-base mb-6">
        We’re excited to announce that EZ Module will continue to evolve with new and innovative components. Stay tuned for updates, including additional UI elements, feature-based components, and more.
        <br />
        Some components are labeled as "coming soon" and will be available in future releases.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-orange-400 ">
        About the Developer
      </h2>
      <p className="text-base mb-6">
        EZ Module is developed by <strong>Sourav Chhimpa</strong>, a web developer from India. Connect with me on various platforms:
      </p>
      <div className="flex gap-4 mb-6">
        <a href="https://github.com/souravhere" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200">
          <FaGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/sourav-chhimpa/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200">
          <FaLinkedin size={24} />
        </a>
        <a href="https://twitter.com/souravchhimpa1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200">
          <FaTwitter size={24} />
        </a>
        <a href="https://instagram.com/sourav_chhimpa" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200">
          <FaInstagram size={24} />
        </a>
        <a href="https://www.npmjs.com/~souravhere" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200">
          <FaNpm size={24} />
        </a>
      </div>

      <p className="text-sm text-gray-500 mb-6">
        EZ Module is an open-source project, and we welcome contributions from the community! For more information, visit our GitHub repository.
      </p>

      <div className="text-gray-500">
        <a href="https://veggie-smart.vercel.app/" className="text-blue-500 hover:text-blue-300 flex items-center gap-2">
          <AiOutlineLink size={20} /> Veggie Smart
        </a>
      </div>
      <div className='w-full my-3 py-7'>
        <div className='w-full flex items-center justify-between'>
          <div>
            <h2 className='font-semibold my-3 text-lg'>Next Page</h2>
            <Link className='px-3 py-2 border border-orange-400 rounded-lg font-semibold bg-orange-600 text-white hover:bg-orange-500 duration-500' to='TooltipDocs'>Tooltip Component</Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default IntroductionPage;
