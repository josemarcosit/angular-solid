import { Component } from '@angular/core';
@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss']
})
export class ComponentComponent {
  products = [
    { Id: 1, Name: "Mouse", Price: 9.99 },
    { Id: 2, Name: "Keyboard", Price: 19.99 },
    { Id: 3, Name: "Microphone ", Price: 30.59 }
  ]

  delete(index:number){
    this.products.splice(index, 1);
  }

  add(value: any) {
    let product ={
      Id: this.products.length,
      Name: value.name,
      Price: value.price
    }
    this.products.push(product);
    console.log(this.products)
  }
}
