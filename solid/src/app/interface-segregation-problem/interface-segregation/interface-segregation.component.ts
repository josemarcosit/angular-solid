import { Component } from '@angular/core';
import { ProductService } from 'src/app/single-responsibility-solution/product.service';

@Component({
  selector: 'app-interface-segregation',
  templateUrl: './interface-segregation.component.html',
  styleUrls: ['./interface-segregation.component.scss']
})
export class InterfaceSegregationComponent {
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
