import { AuthTokens } from "@utils"

export interface Response<T extends object> {
  data: T;
  tokens: AuthTokens;
}
