"use client"
import { createContext, useMemo } from "react"
import { ContextProps } from "@app/_shared"
import React from "react"
import { PostDto, server } from "@services"
import { api } from "@utils"
import useMiddleLayoutReducer, {
    MiddleLayoutState,
    AppendPostsAction,
} from "./useMiddleLayout.reducer"

export interface MiddleLayoutContextProps {
  state: MiddleLayoutState;
  dispatch: React.Dispatch<AppendPostsAction>;
  actions: {
    handleAppendPosts: () => void;
  };
}

export const MiddleLayoutContext =
  createContext<MiddleLayoutContextProps | null>(null)

const NUMBER_OF_POSTS = 3

const MiddleLayoutProviders = (props: ContextProps) => {
    const [state, dispatch] = useMiddleLayoutReducer()

    const handleAppendPosts = async () => {
        const postsFetched = await server.graphql.post.findManyPosts(
            {
                courseId: "1e0386a3-eb88-40bd-9cfc-327e904fdb20", //fix cứng tạm
                skip: state.posts.length,
                take: NUMBER_OF_POSTS,
            },
            {
                postContents: {
                    content: true,
                    contentType: true,
                },
                title: true,
                course: {
                    courseId: true
                },
                
            }
        )
        if (api.parseErrorResponse(postsFetched)) return

        const _postsFetched = postsFetched as PostDto[]
        if (!_postsFetched.length) {
            dispatch({
                type: "SET_AT_END_OF_POSTS",
                payload: true,
            })
        }
        dispatch({
            type: "APPEND_POSTS",
            payload: postsFetched as PostDto[],
        })
    }

    const actions = {
        handleAppendPosts,
    }

    const middleLayoutContext = useMemo(() => {
        return {
            state,
            dispatch,
            actions,
        }
    }, [state, dispatch, actions])

    return (
        <MiddleLayoutContext.Provider value={middleLayoutContext}>
            {props.children}
        </MiddleLayoutContext.Provider>
    )
}

export default MiddleLayoutProviders
