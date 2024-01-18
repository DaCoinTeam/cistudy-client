import { ContentType } from "../enums"

export default interface PostContentDto {
  postContentId: string;
  index: number;
  content: string;
  contentType: ContentType;
  postId: string;
}

