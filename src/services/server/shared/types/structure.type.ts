/* eslint-disable @typescript-eslint/no-explicit-any */
 type Structure<T extends Record<string, any>> = {
  [K in keyof T]: boolean | Structure<T[K]>;
} & { [key: string]: boolean | Structure<any> };

export default Structure