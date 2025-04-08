import React from "react";
import { useState, useEffect } from "react";
const TextChange = () => {
  const texts = ["Hi, I'm Apurva singh", "Hi, I'm coder", "Hi, I'm web  devloper"];
  const [currenText, setCurrentText] = useState("");
  const [endValue, setendValue] = useState(1);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);
  const [count,setCount]=useState(-1)

  useEffect(() => {
    const intervalId = setInterval(() => {
      // console.log(texts[index].length)
      console.log(`updated index value${index}`)
      if(index>texts.length-1)
      {
        setIndex(0)
      }
      
      setCurrentText(texts[index].substring(0, endValue));
    //   console.log(texts[index].substring(0, endValue))
      if (isForward) {
        // console.log(`Previous end value${endValue}`)
        setendValue((prev) => prev + 1);
        // console.log(`Updated end value${endValue}`)
      } 
      else {
        setendValue((prev) => prev - 1);
      }
      if (endValue > texts[index].length+5) {
        setIsForward(false);
        setCount((prev)=>prev+1)
      }
      if ( isForward== false && endValue < 2.1) {
        setIsForward(true);
        setCount(0)
        console.log(`previous index value${index}`)
        setIndex((prev)=>prev+1)
        setendValue(true)

        // console.log(index & texts.length)
        // setIndex((prev) => prev & texts.length);
        
        //  setIndex((prev) => prev+1);
      }
     
      // console.log(endValue)
      // if(endValue>texts[index].length+10)
      // {
      //   console.log(`previous index value${index}`)
      //   setIndex((prev)=>prev+1)
      //   setendValue(true)
      // }
      

    }, 100);

    return () => clearInterval(intervalId);
  }, [endValue,index, isForward,texts,count]);

    
    // const intervalId = setInterval(() => {
    
      
    //   setCurrentText(texts[index].substring(0, endValue));
    // //   console.log(texts[index].substring(0, endValue))
    //   if (isForward) {
    //     setendValue((prev) => prev + 1);
    //   } else {
    //     setendValue((prev) => prev - 1);
    //   }
    //   if (endValue > texts[index].length+50) {
    //     setIsForward(false);
    //   }
    //   if (endValue < 2.1) {
    //     setIsForward(true);
    //     // console.log(index & texts.length)
    //     setIndex((prev) => prev & texts.length);
        
    //     //  setIndex((prev) => prev+1);
    //   }
      

    // }, 2000);
    


  return <div className="transition ease duration-300">{currenText}</div>;
};

export default TextChange;