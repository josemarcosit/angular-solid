import { Component, Input } from '@angular/core';
import { ProductService } from 'src/app/single-responsibility-solution/product.service';
import { ItemBaseComponent } from '../product-base';

@Component({
  selector: 'app-liskov-product-item',
  templateUrl: './liskov-product-item.component.html',
  styleUrls: ['./liskov-product-item.component.scss']
})
export class LiskovProductItemComponent  extends ItemBaseComponent{

  constructor(private productService: ProductService) {
    super();
  }

  ngOnInit() {
    super.products = this.productService.getProducts();
   }

}
