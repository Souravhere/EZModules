import React from 'react'   
import { jsx } from 'react/jsx-runtime';
import CodeHighlighter from '../Codehigh/CodeHighlighter';
import { Link } from 'react-router-dom';


function IndexData() {
    const installezm = `npm install ezmodule`;
  return (
    <div className="w-full h-[80vh] bg-gray-800 flex items-center justify-center">
        <div>
            {/* <p className="w-full text-center mb-2"><span className='text-orange-600 text-center bg-orange-300/20 px-2 py-1 font-semibold rounded-lg mx-auto'>Beta Release</span></p> */}
            <h1 className="font-semibold text-3xl text-center">Welcome To EZ Module</h1>
            <p className='sm:w-1/2 text-center mx-auto text-sm my-3 font-semibold p-2' >EZModule is a versatile and open-source React component library, offering reusable UI and feature components for developers seeking to enhance their web projects efficiently.</p>
            <div className='sm:w-1/2 w-64 sm:px-6 px-0 mx-auto'>
            <CodeHighlighter language="bash" code={installezm} />
            </div>
            <Link to='/docs'>
            <p className='w-full text-center mb-2'>
                <span className="px-3 py-2 bg-green-400 text-gray-800 font-semibold rounded-lg hover:cursor-pointer hover:bg-green-500 duration-500">
                    Get started
                </span>
            </p>
            </Link>
            {/* <p className="font-semibold text-sm mt-2 text-center">By Sourav</p> */}
        </div>
    </div>
  )
}

export default IndexData
