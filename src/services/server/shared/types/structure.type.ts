/* eslint-disable @typescript-eslint/no-explicit-any */
type Structure<T> =
  T extends (infer U)[] ? { [K in keyof U]: Structure<U[K]> } :
  T extends Record<string, any> ? { [K in keyof T]: Structure<T[K]> } :
  boolean;

export default Structure
