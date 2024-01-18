import PostContentDto from "./post-content.interface"

export default interface Post {
  postId: string;
  title: string;
  creatorId: string;
  courseId: string;
  postContents: Partial<PostContentDto>[]
}