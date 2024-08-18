// src/components/CodeHighlighter.jsx
import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Prism from 'prismjs';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/themes/prism-tomorrow.css'; // Add this import for default Prism styles
import { FaCheck } from "react-icons/fa";
import { FaRegCopy } from "react-icons/fa";

const CodeHighlighter = ({ language, code, customStyles = {} }) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    let highlightedCode;
    try {
        highlightedCode = Prism.highlight(code, Prism.languages[language] || Prism.languages.javascript, language);
    } catch (error) {
        console.error(`Error highlighting code: ${error.message}`);
        highlightedCode = code; // Fallback: display raw code if highlighting fails
    }

    return (
        <div className='relative items-center justify-between rounded-lg mx-auto my-5 px-2' style={{ backgroundColor: customStyles.backgroundColor || '#2d2d2d' }}>
            <div className="sm:w-fit w-[90%] sm:overflow-x-hidden overflow-x-scroll">
                <pre className={`language-${language} text-white`} style={{ backgroundColor: customStyles.backgroundColor || '#2d2d2d' }}>
                    <code dangerouslySetInnerHTML={{ __html: highlightedCode }} style={{ backgroundColor: customStyles.backgroundColor || '#2d2d2d' }} />
                </pre>
                <CopyToClipboard text={code} onCopy={handleCopy}>
                    <button className="px-2 absolute top-2 right-2 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 duration-500">
                        {isCopied ? <FaCheck /> : <FaRegCopy />}
                    </button>
                </CopyToClipboard>
            </div>
        </div>
    );
};

export default CodeHighlighter;
