export type ReturnPromiseType<
  T,
  RT extends ReturnType<T> = ReturnType<T>
> = RT extends Promise<infer T2> ? T2 : never;
