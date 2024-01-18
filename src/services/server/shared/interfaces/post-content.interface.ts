import { ContentType } from "../enums"

export default interface PostContent {
  postContentId: string;
  index: number;
  content: string;
  contentType: ContentType;
  postId: string;
}

