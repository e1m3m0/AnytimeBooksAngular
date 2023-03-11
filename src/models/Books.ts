export class Books {
  isbn10: number;
  author: string;
  title: string;
  cover: string;
  description: string;
  extDescription: string;
  pageCount: number;
  links: [{
    name: string;
    url: string;
  }];
  publisher: string;
  saved: boolean;
}