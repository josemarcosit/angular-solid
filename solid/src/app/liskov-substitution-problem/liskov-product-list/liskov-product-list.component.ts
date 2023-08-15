import { Component, Input } from '@angular/core';
import { ProductService } from 'src/app/single-responsibility-solution/product.service';
import { ItemBaseComponent } from '../product-base';

@Component({
  selector: 'app-liskov-product-list',
  templateUrl: './liskov-product-list.component.html',
  styleUrls: ['./liskov-product-list.component.scss']
})
export class LiskovProductListComponent extends ItemBaseComponent {

  constructor(private productService: ProductService) {
    super();
  }

  ngOnInit() {
   super.products = this.productService.getProducts();
  }
}

