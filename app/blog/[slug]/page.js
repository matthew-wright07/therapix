"use client"

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react';
import Blog from '@/components/Blog/Blog';
import MoreBlogs from '@/components/Blog/MoreBlogs';

export default function BlogPage(){
    const pathname = usePathname();
    const name = pathname.split("/")[2]
    const [data,setData] = useState(null)
    useEffect(()=>{
        async function getData(){
            const response = await fetch("/api/blog",{
            method:"POST",
            body:JSON.stringify({name:name})
            })
            const responseData = await response.json()
            setData(responseData)
        }
        getData()
    },[])

    return (
        <>
        <Blog data={data}/>
        <MoreBlogs/>
        </>
    )
}
