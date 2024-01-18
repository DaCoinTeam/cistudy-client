"use client"
import React, { Suspense, lazy, useState } from "react"
import PostCard from "./PostCard"
import InfiniteScroll from "react-infinite-scroller" 
import utils from "@utils"

interface MiddleLayoutProps {
    className?: string
}

const MiddleLayout = (props: MiddleLayoutProps) => {
    const [numLoaded, setNumLoaded] = useState<number[]>([]) //new
    //callback sẽ dc trigger nếu kéo xuống màn hình
    const loading = async () => {
        await sleep(2000)
        //fetch api
        console.log("loaded")
        setNumLoaded(x => [...x, 1])
    }

    return (<div className={props.className}>
        <InfiniteScroll //new
            pageStart={0}
            loadMore={loading}
            hasMore={true || false}
            loader={<div className="loader" key={0}>Loading ...</div>}
        >
            {
                numLoaded.map((x) => <PostCard key={x}/>)
            }

        </InfiniteScroll>
    </div>)
}

export default MiddleLayout

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));