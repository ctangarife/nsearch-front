
export interface ICategory {
  id: number
  name: string;
  url: string;
  modules: {
    id: number,
    name: string,
  }[];
}