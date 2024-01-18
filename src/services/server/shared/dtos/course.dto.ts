export enum VerifiedStatus {
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
  verifiedStatus?: VerifiedStatus;
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
    "isDeleted",
    "isDraft",
    "previewVideoUrl",
    "price",
    "targets",
    "thumbnailUrl",
    "title",
    "verifiedStatus"
]
