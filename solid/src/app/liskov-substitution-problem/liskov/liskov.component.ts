import { Component } from '@angular/core';
import { ProductService } from 'src/app/single-responsibility-solution/product.service';

@Component({
  selector: 'app-liskov',
  templateUrl: './liskov.component.html',
  styleUrls: ['./liskov.component.scss']
})
export class LiskovComponent {
  products:any = [];

  constructor(private productService: ProductService) {
  }
  ngOnInit() {
   this.products = this.productService.getProducts();
  }

  onProductAdded(product:any){
    this.productService.add(product);
  }

  onDeleted(value:any){
    console.log(value);
  }
}
