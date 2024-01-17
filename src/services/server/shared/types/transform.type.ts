/* eslint-disable @typescript-eslint/no-explicit-any */
export type Transform<T extends Record<string, any>> = {
  [K in keyof T]: boolean | Transform<T[K]>;
} & { [key: string]: boolean | Transform<any> };
