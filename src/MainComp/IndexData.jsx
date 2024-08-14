import React from 'react'   
import { jsx } from 'react/jsx-runtime';
import CodeHighlighter from '../Codehigh/CodeHighlighter';


function IndexData() {
    const installezm = `npm install ezmodules`;
  return (
    <div className="w-full h-[80vh] bg-gray-800 flex items-center justify-center">
        <div>
            <p className="w-full text-center mb-2"><span className='text-orange-600 text-center bg-orange-300/20 px-2 font-semibold rounded-lg mx-auto'>Beta Release</span></p>
        <h1 className="font-semibold text-3xl text-center">Welcome To EZ Modules</h1>
            <CodeHighlighter language="bash" code={installezm} />
            <p className="font-semibold text-sm mt-2 text-center">By Sourav</p>
        </div>
    </div>
  )
}

export default IndexData
