import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = [
    { Id: 1, Name: "Mouse", Price: 9.99 },
    { Id: 2, Name: "Keyboard", Price: 19.99 },
    { Id: 3, Name: "Microphone ", Price: 30.59 }
  ]

  constructor() { }

  delete(index:number){
    this.products.splice(index, 1);
  }

  add(value: any){
    let product ={
      Id: this.products.length,
      Name: value.Name,
      Price: value.Price
    }
    this.products.push(product);
  }

  getProducts(){
    return this.products;
  }

}
