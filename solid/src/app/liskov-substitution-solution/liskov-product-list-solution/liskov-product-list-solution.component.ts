import { Component, Input } from '@angular/core';
import { ProductService } from 'src/app/single-responsibility-solution/product.service';

@Component({
  selector: 'app-liskov-product-list-solution',
  templateUrl: './liskov-product-list-solution.component.html',
  styleUrls: ['./liskov-product-list-solution.component.scss']
})
export class LiskovProductListSolutionComponent {
  @Input() products:any = [];

  constructor(private productService: ProductService) {
  }
  ngOnInit(): void {
   this.products = this.productService.getProducts();
  }
}
