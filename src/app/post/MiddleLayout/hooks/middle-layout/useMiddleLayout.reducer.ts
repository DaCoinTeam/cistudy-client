import { PostDto } from "@services"
import { useReducer } from "react"

export interface MiddleLayoutState {
  posts: PostDto[];
  atEndOfPosts: boolean;
}

export interface AppendPostsAction {
  type: "APPEND_POSTS";
  payload: PostDto[];
}

export interface SetAtEndOfPostsAction {
    type: "SET_AT_END_OF_POSTS";
    payload: boolean;
  }

export type MiddleLayoutAction = AppendPostsAction | SetAtEndOfPostsAction;

export const middleLayoutState: MiddleLayoutState = {
    posts: [],
    atEndOfPosts: false
}

export const middleLayoutReducer = (
    state: MiddleLayoutState,
    action: MiddleLayoutAction
) => {
    switch (action.type) {
    case "APPEND_POSTS":
        return { ...state, posts: [...state.posts, ...action.payload] }
    case "SET_AT_END_OF_POSTS":
        return { ...state, atEndOfPosts: action.payload}
    default:
        return state
    }
}

const useMiddleLayoutReducer = () => {
    return useReducer(middleLayoutReducer, middleLayoutState)
}

export default useMiddleLayoutReducer
