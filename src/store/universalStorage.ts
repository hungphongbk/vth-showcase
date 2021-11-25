const serverSideStorage = {
  getItem: () => Promise.resolve(null),
  setItem: (_: any, value: any) => Promise.resolve(value),
  removeItem: () => Promise.resolve(),
} as const;

const universalStorage =
  typeof window !== "undefined"
    ? require("redux-persist-indexeddb-storage").default("showcases")
    : serverSideStorage;

export default universalStorage;
