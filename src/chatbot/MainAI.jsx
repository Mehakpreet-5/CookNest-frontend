

import React, { useContext, useEffect, useRef, useState } from 'react';
import './main.css';
import { assets } from '../assets/AI/assets.js';
import { Context } from "./ContextAI.jsx";
import Sidebar from './Sidebar.jsx';
import Pasta from '../assets/pasta.jpg';
import raw from '../assets/raw.jpg';
import fastt from '../assets/fastt.png';
import recipeIcon from '../assets/chieff.png'
const Main = () => {
    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input, prevPrompts } = useContext(Context);
    const resultRef = useRef(null);
    const [rows, setRows] = useState(1);

    useEffect(() => {
        const updateRows = () => {
            if (window.innerWidth <= 600) {
                setRows(2);
            } else {
                setRows(1);
            }
        };

        updateRows();
        window.addEventListener('resize', updateRows);
        return () => window.removeEventListener('resize', updateRows);
    }, []);

    useEffect(() => {
        if (resultRef.current) {
            resultRef.current.scrollTop = resultRef.current.scrollHeight;
        }
    }, [resultData]);

    return (<>
        <div className='flex flex-col lg:flex-row md:flex-row h-screen bg-yellow-100 bg-opacity-15 pt-10'>
            <div className='ml-24 lg:ml-0 mb-28 lg:mb-0 md:ml-0'>
                <Sidebar history={prevPrompts} /> </div>
            <main className="recipe-main ">

                <div className="recipe-main-container text-center lg:text-start md:text-start px-5 lg:px-0 lg:mr-72 mt-1 lg:mt-28 md:mt-10 ">
                    {!showResult ? (
                        <>
                            <div className="recipe-greet   ">
                                <p><span>Hello, Foodie!</span></p>
                                <p>What delicious ideas are you cooking up today?</p>
                            </div>
                            <div className="recipe-cards space-x-4 ">
                                <div className="recipe-card border border-yellow-600 border-opacity-30 bg-yellow-100 bg-opacity-10" onClick={() => setInput("Suggest me a pasta recipe")}>
                                    <p>Suggest a pasta recipe</p>
                                    <img src={Pasta} alt="Pasta Icon" className='mt-3 rounded-md h-28 w-44 ml-1' />
                                </div>
                                <div className="recipe-card px-4 border border-yellow-600 border-opacity-30 bg-yellow-100 bg-opacity-10" onClick={() => setInput("How do I make a vegan dish?")}>
                                    <p>How to make a veg dish</p>
                                    <img src={raw} alt="Vegan Icon" className='mt-3 rounded-md h-28 w-44 ml-1' />
                                </div>
                                <div className="recipe-card border border-yellow-600 border-opacity-30 bg-yellow-100 bg-opacity-10 hidden sm:block " onClick={() => setInput("Give me a quick breakfast idea")}>
                                    <p>Quick breakfast ideas</p>
                                    <img src={fastt} alt="Breakfast Icon" className='mt-3 rounded-md h-28 w-44 ml-1' />
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="recipe-result lg:mr-48 m-10 mb-32" ref={resultRef}>
                            <div className="recipe-result-title">
                                <img src={recipeIcon} alt="User Icon" />
                                <p>{recentPrompt}</p>
                            </div>
                            <div className="recipe-result-data ">
                                {/* <img className="recipe-result-data-icon" src={assets.chatbot_icon} alt="Chatbot Icon" /> */}
                                {loading ? (
                                    <div className="recipe-loader">
                                        <hr />
                                        <hr />
                                        <hr />
                                    </div>
                                ) : (
                                    <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                                )}
                            </div>
                        </div>
                    )}
                    <div className="recipe-main-bottom lg:ml-36 bg-white lg:bg-yellow-100 lg:bg-opacity-5 md:bg-yellow-100 md:bg-opacity-5">
                        <div className="recipe-search-box border border-yellow-700 border-opacity-30 bg-yellow-50 bg-opacity-5
                         justify-between h-16 flex-row ">
                            <textarea
                                rows={rows}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyUp={(e) => {
                                    if (e.key === 'Enter') {
                                        onSent();
                                    }
                                }}
                                value={input}
                                placeholder="Ask about food recipes or ingredients"
                                className=' w-80'

                            />
                            <div className='recipe-icon-container'>
                                <button type="submit" onClick={() => onSent()}><img src={assets.send_icon} alt="Send Icon"
                                    className='recipe-icon-container' /></button> </div>

                        </div>
                        <p className="recipe-bottom-info ">
                            Ask me anything about food! Recipes, ingredients, or diet suggestions.
                        </p>
                    </div>
                </div>
            </main>
        </div></>
    );
}

export default Main;
