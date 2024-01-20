import PostDto from "./post-dto.interface"
import { VerifiedStatus } from "../../enums"
import UserDto from "./user-dto.interface"

export interface CourseIncludes {
  time?: number;
}

export default interface CourseDto {
  courseId: string;
  title: string;
  thumbnailUrl: string;
  description: string;
  price: number;
  verifiedStatus: VerifiedStatus;
  isDraft: boolean;
  creator: UserDto;
  isDeleted: boolean;
  previewVideoUrl: string;
  targets: string;
  includes: CourseIncludes;
  posts: PostDto[];
 // enrolledInfos: EnrolledInfo[];
}
