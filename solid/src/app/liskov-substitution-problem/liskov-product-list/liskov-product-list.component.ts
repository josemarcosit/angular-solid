import { Component, Input } from '@angular/core';
import { LiskovProductBaseComponent } from '../liskov-product-base';
import { ProductService } from 'src/app/single-responsibility-solution/product.service';

@Component({
  selector: 'app-liskov-product-list',
  templateUrl: './liskov-product-list.component.html',
  styleUrls: ['./liskov-product-list.component.scss']
})
export class LiskovProductListComponent extends LiskovProductBaseComponent {

  constructor(private productService: ProductService) {
    super();
  }

  ngOnInit(): void {
   super.items = this.productService.getProducts();
  }
}

