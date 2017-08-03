export class Bookdata {
  /* book = [{
   title: 'Love Story',
   price: '$48'
   },
   {title : 'Two States',
   price : '$56'
   }
   ];*/
  public title: string;
  public author: string;
  public price: number;
  public image: string;

  constructor(title: string, author: string, price: number, image: string) {
    this.title = title;
    this.author = author;
    this.price = price;
    this.image = image;
  }


}
