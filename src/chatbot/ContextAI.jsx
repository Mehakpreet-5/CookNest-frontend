import { createContext, useState } from "react";
import runChat from "./gemini";

export const Context = createContext();

const ContextProvider = (props) => {
    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    const delayPara = (index, nextWord) => {
        setTimeout(function () {
            setResultData((prev) => prev + nextWord);
        }, 75 * index);
    };

    const newChat = () => {
        setLoading(false);
        setShowResult(false);
    };

    const isFoodRelated = (prompt) => {
        const foodKeywords = [
            'recipe', 'food', 'dish', 'meal', 'diet', 'cooking', 'ingredient', 'snack', 'dessert', 'pizza', 'burger', 'pasta', 'salad', 'soup', 'sandwich', 'sushi', 'tacos',
             'cake', 'ice cream', 'chocolate', 'fries', 'steak', 'pancakes', 'waffles', 'curry', 'biryani', 'ramen', 'burrito', 'noodles', 'rice', 'pudding', 'muffin', 'bread', 'butter', 
             'cheese', 'chips', 'BBQ', 'grill', 'fish', 'chicken', 'beef', 'pork', 'vegetables', 'fruits', 'smoothie', 'juice', 'coffee', 'tea', 'milkshake', 'cookies', 'brownies', 'lasagna', 
             'casserole', 'omelette', 'samosa', 'falafel', 'hummus', 'shawarma', 'kebab', 'dumplings', 'spring rolls', 'pasta sauce', 'guacamole', 'hot dog', 'pie', 'quiche', 'risotto', 'paella',
              'tiramisu', 'crepe', 'donut', 'chicken'
        ];
        return foodKeywords.some((keyword) =>
            prompt.toLowerCase().includes(keyword)
        );
    };

    const onSent = async (prompt) => {
        setResultData("");
        setLoading(true);
        setShowResult(true);
        let response;

        // Redirect to food-related advice if the prompt isn't about food
        if (!isFoodRelated(prompt || input)) {
            response = "I can assist you better with food advice! How about asking for a new recipe or meal ideas?";
            setRecentPrompt("Looking for food advice?");
        } else {
            response = await runChat(prompt || input);
            setRecentPrompt(prompt || input);
        }

        // Filter out unwanted phrases
        const filteredResponse = response.replace(/I'm sorry, *?\. /g, "");

        // Process the filtered response to display properly
        let responseArray = filteredResponse.split("**");
        let newResponse = "";
        for (let i = 0; i < responseArray.length; i++) {
            if (i === 0 || i % 2 !== 1) {
                newResponse += responseArray[i];
            } else {
                newResponse += "<b>" + responseArray[i] + "</b>";
            }
        }

        let newResponse2 = newResponse.split("*").join("</br>");
        let newResponseArray = newResponse2.split(" ");
        for (let i = 0; i < newResponseArray.length; i++) {
            const nextWord = newResponseArray[i];
            delayPara(i, nextWord + " ");
        }

        setLoading(false);
        setInput("");
    };

    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        recentPrompt,
        setRecentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        newChat,
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;
