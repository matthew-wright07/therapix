"use client"

import { useState } from "react"

export default function QA({question,answer}){
    const [clicked,setClicked] = useState(false)
    function handleClick(){
        setClicked(!clicked)
    }
    return (
        <>
        <div onClick={handleClick} className="border border-white text-white p-4 rounded-lg flex justify-between hover:cursor-pointer">
            <p>{question}</p>
            <img src="/arrow.svg" className={`w-4 ${clicked?"rotate-180":null} transition duration-500`}/>
        </div>
        {clicked?
            <div className="bg-primary text-white p-4 rounded-lg">
            <p>{answer}</p>
            </div>
        :null}
        </>
    )
}