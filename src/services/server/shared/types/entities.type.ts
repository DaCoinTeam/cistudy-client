import { ContentType, UserKind, UserRole, VerifiedStatus } from "../enums"

export type UserEntity = {
  userId: string
  email: string
  password?: string
  avatarUrl?: string
  phoneNumber?: string
  balance: number
  role: UserRole
  walletId?: string
  firstName?: string
  lastName?: string
  birthdate?: Date
  verified: boolean
  kind: UserKind
  externalId?: string
  sessions: Array<SessionEntity>
  postComments: Array<PostCommentEntity>
  postReacts: Array<PostReactEntity>
  enrolledInfos: Array<EnrolledInfoEntity>
  posts: Array<PostEntity>
  courses: Array<CourseEntity>
};

export type PostEntity = {
  postId: string
  title: string
  creatorId: string
  courseId: string
  createdAt: Date
  updatedAt: Date
  course: CourseEntity
  creator: UserEntity
  postContents: Array<Partial<PostContentEntity>>
  postComments: Array<PostCommentEntity>
  postReacts: Array<PostReactEntity>
};

export interface CourseEntity {
  courseId: string
  title: string
  thumbnailId: string
  description: string
  price: number
  verifiedStatus: VerifiedStatus
  isDraft: boolean
  creator: UserEntity
  isDeleted: boolean
  previewVideoId: string
  targets: string
  includes: string
  posts: Array<PostEntity>
  enrolledInfos: Array<EnrolledInfoEntity>
  sections: Array<SectionEntity>
}

export type EnrolledInfoEntity = {
  enrolledId: string
  userId: string
  courseId: string
  enrolledAt: Date
  course: CourseEntity
  user: UserEntity
};

export type LectureEntity = {
  lectureId: string
  title: string
  videoId: string
  sectionId: string
  createdAt: Date
  section: SectionEntity
  resource: Array<ResourceEntity>
};

export type PostCommentContentEntity = {
  postCommentContentId: string
  postCommentId: string
  index: number
  contentType: ContentType
  content: string
  postComment: PostCommentEntity
};

export type PostCommentLikeEntity = {
  postCommentLikeId: string
  userId: string
  postId: string
  createdAt: Date
  user: UserEntity
  postComment: PostCommentEntity
};

export type PostCommentEntity = {
  postCommentId: string
  userId: string
  postId: string
  createdAt: Date
  updatedAt: Date
  fatherCommentId: string | null
  post: PostEntity
  user: UserEntity
  postCommentContents: Array<Partial<PostCommentContentEntity>>
  postCommentLikes: Array<PostCommentLikeEntity>
  childComments: Array<PostCommentEntity>
};

export type PostContentEntity = {
  postContentId: string
  index: number
  content: string
  contentType: ContentType
  postId: string
  post: PostEntity
};

export type SectionEntity = {
  sectionId: string
  title: string
  courseId: string
  createdAt: Date
  course: CourseEntity
  lectures: Array<LectureEntity>
};

export type ResourceEntity = {
  resourceId: string
  resourceLink: string
  lectureId: string
  lecture: LectureEntity
};

export type SessionEntity = {
  sessionId: string
  userId: string
  createdAt: Date
  isDisabled: boolean
  clientId: string
  user: UserEntity
};

export type PostReactEntity = {
  postReactId: string
  userId: string
  postId: string
  liked: boolean
  createdAt: Date
  updatedAt: Date
  user: UserEntity
  post: PostEntity
};
