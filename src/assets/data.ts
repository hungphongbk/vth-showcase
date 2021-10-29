import demoData from './data.json';

export type DataItem = {
    id: number;
    title: string;
    author: string;
    image: string;
}

export default demoData as DataItem[]