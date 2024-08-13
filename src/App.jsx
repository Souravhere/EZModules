import { jsx } from "react/jsx-runtime";
import CodeHighlighter from "./Codehigh/CodeHighlighter"

function App() {
  const installezm = `npm install ezmodules`;
  return (
    <>
    <div className="w-full h-screen bg-gray-800 text-gray-500">
      <nav className="flex items-center justify-between py-4 px-4">
        <h1 className="text-xl font-semibold">EZ Modules</h1>
        <p className="px-2 py-1 text-sm font-semibold text-gray-300 bg-slate-700 rounded-full hover:cursor-pointer">Docs</p>
      </nav>
      <div className="mt-10">
      <h1 className="font-semibold text-3xl text-center">Welcome To EZ Modules</h1>
      <CodeHighlighter language="bash" code={installezm} />
      <p className="font-semibold text-sm mt-2 text-center">By Sourav <span className="text-orange-400">Beta Release</span></p>
      </div>
    </div>
    </>
  )
}

export default App
