import demoData from "./data.json";

export type DataItem = {
  id: number;
  title: string;
  brand: string;
  author: string;
  image: string;
  description: string;
};

export default demoData as DataItem[];
