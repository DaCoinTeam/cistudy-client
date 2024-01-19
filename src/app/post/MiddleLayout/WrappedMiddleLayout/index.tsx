"use client"
import React, { createContext, useContext } from "react"
import { MiddleLayoutContext } from "../hooks"
import InfiniteScroll from "react-infinite-scroller"
import PostCard from "./PostCard"
import { PostDto } from "@services"

interface WrappedMiddleLayoutProps {}

export const PostContext = createContext<PostDto | null>(null)

const WrappedMiddleLayout = (props: WrappedMiddleLayoutProps) => {
    const { state, actions } = useContext(MiddleLayoutContext)!
    const { posts } = state
    const { handleAppendPosts } = actions
    return (
        <InfiniteScroll //new
            pageStart={0}
            loadMore={handleAppendPosts}
            hasMore={true || false}
            loader={
                <div className="loader" key={0}>
          Loading ...
                </div>
            }
        >
            {posts.map((post) => (
                <PostContext.Provider key={post.postId} value={post}>
                    <PostCard data={post} />
                </PostContext.Provider>
            ))}
        </InfiniteScroll>
    )
}

export default WrappedMiddleLayout
