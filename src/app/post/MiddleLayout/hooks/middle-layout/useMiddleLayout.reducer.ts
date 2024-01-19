import { PostDto } from "@services"
import { useReducer } from "react"

export interface MiddleLayoutState {
  posts: PostDto[];
}

export interface SetPostsAction {
  type: "APPEND_POSTS";
  payload: PostDto[];
}

export type MiddleLayoutAction = SetPostsAction;

export const middleLayoutState: MiddleLayoutState = {
    posts: [],
}

export const middleLayoutReducer = (
    state: MiddleLayoutState,
    action: MiddleLayoutAction
) => {
    switch (action.type) {
    case "APPEND_POSTS":
        return { ...state, posts: [...state.posts, ...action.payload] }
    default:
        return state
    }
}

const useMiddleLayoutReducer = () => {
    return useReducer(middleLayoutReducer, middleLayoutState)
}

export default useMiddleLayoutReducer
