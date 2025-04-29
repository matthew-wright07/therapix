"use client"

import { useState } from "react";
import { useEffect } from "react";
import BlogCard from "./BlogCard";

export default function BlogPage(){
    const [data,setData] = useState(null)
    useEffect(()=>{
        async function getData(){
            const response = await fetch("/api/blogs")
            const responseData = await response.json()
            setData(responseData)
        }
        getData()
    },[])
    return(
        <>
        {data?
            <div className="grid grid-cols-4 px-12 py-4 gap-8">
                {data.map((item, index) => (
                    <BlogCard key={index} data={item} />
                ))}
            </div>
        :
        <div className="px-12">
            <div className="w-full flex justify-center items-center gap-4 h-[100vh] bg-secondary rounded-lg">
                <div class="flex flex-row gap-2">
                    <div class="w-4 h-4 rounded-full bg-primary animate-bounce"></div>
                        <div class="w-4 h-4 rounded-full bg-primary animate-bounce [animation-delay:-.3s]"></div>
                    <div class="w-4 h-4 rounded-full bg-primary animate-bounce [animation-delay:-.5s]"></div>
                </div>
            </div>
        </div>
        }
        </>
    )
}