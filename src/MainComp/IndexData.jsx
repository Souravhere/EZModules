import React from 'react'   
import { jsx } from 'react/jsx-runtime';
import CodeHighlighter from '../Codehigh/CodeHighlighter';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaNpm } from 'react-icons/fa';


function IndexData() {
    const installezm = `npm install ezmodule`;
  return (
    <div className="w-full h-[80vh] bg-gray-800 flex items-center justify-center">
        <div>
            {/* <p className="w-full text-center mb-2"><span className='text-orange-600 text-center bg-orange-300/20 px-2 py-1 font-semibold rounded-lg mx-auto'>Beta Release</span></p> */}
            <h1 className="font-semibold text-3xl text-center">Welcome To EZ Module</h1>
            <p className='sm:w-1/2 text-center mx-auto text-sm my-3 font-semibold p-2' >EZModule is a versatile and open-source React component library, offering reusable UI and feature components for developers seeking to enhance their web projects efficiently.</p>
            <div className='sm:w-1/2 w-72 sm:px-6 px-0 mx-auto'>
            <CodeHighlighter language="bash" code={installezm} />
            </div>
            <Link to='/docs'>
            <p className='w-full text-center mb-2'>
                <span className="px-3 py-2 bg-green-400 text-gray-800 font-semibold rounded-lg hover:cursor-pointer hover:bg-green-500 duration-500">
                    Get started
                </span>
            </p>
            </Link>
            <div className='w-full flex items-center justify-center my-6'>
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
            </div>
            {/* <p className="font-semibold text-sm mt-2 text-center">By Sourav</p> */}
        </div>
    </div>
  )
}

export default IndexData
