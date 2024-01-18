import PostContentDto from "./post-content-dto.interface"

export default interface PostDto {
  postId: string;
  title: string;
  creatorId: string;
  courseId: string;
  postContents: Partial<PostContentDto>[]
}