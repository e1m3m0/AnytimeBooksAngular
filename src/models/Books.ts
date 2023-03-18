export class Books {
  isbn10: any;
  author: string;
  title: string;
  subtitle: string;
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
  rating: number;
}