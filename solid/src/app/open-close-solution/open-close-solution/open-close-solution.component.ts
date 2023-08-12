import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/single-responsibility-solution/product.service';

@Component({
  selector: 'app-open-close-solution',
  templateUrl: './open-close-solution.component.html',
  styleUrls: ['./open-close-solution.component.scss']
})
export class OpenCloseSolutionComponent implements OnInit{
  products:any = [];

  constructor(private productService: ProductService) {
  }
  ngOnInit(): void {
   this.products = this.productService.getProducts();
  }

  onProductAdded(product:any){
    this.productService.add(product);
  }
}
