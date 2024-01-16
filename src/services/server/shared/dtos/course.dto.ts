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
    "isDeleted",
    "isDraft",
    "previewVideoUrl",
    "price",
    "targets",
    "thumbnailUrl",
    "title",
    "verifyStatus"
]

interface X {
    a?: boolean ,
    b?: boolean,
    c: {
        d: boolean,
        e: boolean
    }
}

const x : x = {
    a: true,
    b : true,
    c: {
        a: true,
        e: true
    }
}