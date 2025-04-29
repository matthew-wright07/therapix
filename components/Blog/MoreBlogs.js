"use client"

import { useState } from "react";
import { useEffect } from "react";
import BlogCard from "./BlogCard";

export default function MoreBlogs(){
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
        <div className="px-12 py-4 flex justify-center">
        {data?
            <div className="grid grid-cols-4 gap-8 w-3/4">
                {data.slice(0, 4).map((item, index) => (
                    <BlogCard key={index} data={item} />
                ))}
            </div>
        :
        <div className="grid grid-cols-4 gap-8">
            <div className="bg-secondary"></div>
            <div className="bg-secondary"></div>
            <div className="bg-secondary"></div>
            <div className="bg-secondary"></div>
        </div>
        }
        </div>
    )
}