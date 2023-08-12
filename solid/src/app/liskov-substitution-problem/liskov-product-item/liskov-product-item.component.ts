import { Component, Input } from '@angular/core';
import { LiskovProductBaseComponent } from '../liskov-product-base';
import { ProductService } from 'src/app/single-responsibility-solution/product.service';

@Component({
  selector: 'app-liskov-product-item',
  templateUrl: './liskov-product-item.component.html',
  styleUrls: ['./liskov-product-item.component.scss']
})
export class LiskovProductItemComponent  extends LiskovProductBaseComponent{

  constructor(private productService: ProductService) {
    super();
  }

  ngOnInit(): void {
    super.items = this.productService.getProducts();
   }

}
