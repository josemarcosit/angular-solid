import { Component } from '@angular/core';
import { ProductService } from 'src/app/single-responsibility-solution/product.service';

@Component({
  selector: 'app-interface-segregation-solution',
  templateUrl: './interface-segregation-solution.component.html',
  styleUrls: ['./interface-segregation-solution.component.scss']
})
export class InterfaceSegregationSolutionComponent {
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

