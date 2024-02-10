export type Response<T> = {
  data: T
  tokens: AuthTokens
};

export type AuthTokens = {
  accessToken: string
  refreshToken: string
};
