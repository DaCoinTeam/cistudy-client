export enum VerifyStatus {
  Pending = "Pending",
  Approved = "Approved",
  Rejected = "Rejected",
}

export interface CourseIncludes {
  time?: number;
}

export interface CourseDto {
  courseId?: string;
  title?: string;
  thumbnailUrl?: string;
  description?: string;
  price?: number;
  verifyStatus?: VerifyStatus;
  isDraft?: boolean;
  creatorId?: string;
  isDeleted?: string;
  previewVideoUrl?: string;
  targets?: string;
  includes?: CourseIncludes;
}

export const courseKeys : (keyof CourseDto)[] = [
    "courseId",
    "creatorId",
    "description",
    "includes",
    "isDeleted",
    "isDraft",
    "previewVideoUrl",
    "price",
    "targets",
    "thumbnailUrl",
    "title",
    "verifyStatus"
]