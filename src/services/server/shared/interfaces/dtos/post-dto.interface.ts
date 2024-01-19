import CourseDto from "./course-dto.inteface"
import PostContentDto from "./post-content-dto.interface"
import UserDto from "./user-dto.interface"

export default interface PostDto {
  postId: string;
  title: string;
  course?: CourseDto;
  creator?: UserDto;
  postContents?: PostContentDto[];
  // postComments?: PostCommentEntity[];
  // postLikes?: PostLikeEntity[];
}
