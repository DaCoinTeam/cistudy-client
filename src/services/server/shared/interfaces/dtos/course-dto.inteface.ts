import { VerifiedStatus } from "../../enums"

export interface CourseIncludes {
  time?: number;
}

export default interface CourseEntity {
  courseId?: string;
  title?: string;
  thumbnailUrl?: string;
  description?: string;
  price?: number;
  verifiedStatus?: VerifiedStatus;
  isDraft?: boolean;
  creatorId?: string;
  isDeleted?: string;
  previewVideoUrl?: string;
  targets?: string;
  includes?: CourseIncludes;
}
