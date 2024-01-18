import { AuthTokens } from "@utils"

export default interface Response<T extends object> {
  data: T;
  tokens: AuthTokens;
}
