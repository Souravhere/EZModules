// src/components/CodeHighlighter.jsx
import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Prism from 'prismjs';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
// rect icons added
import { FaCheck } from "react-icons/fa6";
import { FaRegCopy } from "react-icons/fa";

const CodeHighlighter = ({ language, code }) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    let highlightedCode;
    try {
        highlightedCode = Prism.highlight(code, Prism.languages[language], language);
    } catch (error) {
        console.error(`Error highlighting code: ${error.message}`);
        highlightedCode = code; // Fallback: display raw code if highlighting fails
    }

    return (
        <div className="relative flex items-center justify-between h-[50px] w-[300px] rounded-lg mx-auto bg-gray-700 my-5 px-2">
            <pre className={`language-${language} text-white`}>
                <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
            </pre>
            <CopyToClipboard text={code} onCopy={handleCopy}>
                <button className="px-2 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 duration-500">
                    {isCopied ? <FaCheck /> : <FaRegCopy />}
                </button>
            </CopyToClipboard>
        </div>
    );
};

export default CodeHighlighter;
