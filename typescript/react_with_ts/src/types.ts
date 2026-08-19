export interface Product {
    id:number;
    title:string;
    category:string;
    image:string;
    thumbnail:string;
    price:number;
    description:string
    rating:{
        rate:number;
        count:number;
    }
}

export interface ApiResponseProduct {
   data:[];
   total:number;
   skip:number;
   
}