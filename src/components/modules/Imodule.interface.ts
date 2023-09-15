export interface IModule {
  id: number
  name: string;
  url: string;
  url_download: string;
  categories: {
    id: number,
    name: string
  }[];
  author: {
    id: number,
    name: string
  }
}