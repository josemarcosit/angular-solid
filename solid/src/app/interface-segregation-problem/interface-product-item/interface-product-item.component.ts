import { Component } from '@angular/core';
import { ItemBaseComponent } from 'src/app/liskov-substitution-problem/product-base';
import { Products } from '../interface-segregation/interfaces/products';
import { Product } from '../interface-segregation/product';
import { ProductService } from 'src/app/single-responsibility-solution/product.service';

@Component({
  selector: 'app-interface-product-item',
  templateUrl: './interface-product-item.component.html',
  styleUrls: ['./interface-product-item.component.scss'],
})
export class InterfaceProductItemComponent
  extends ItemBaseComponent
  implements Products
{
  override products: Product[] = [];

  constructor(private productService: ProductService) {
    super();
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  override deleteOnClick(index: number) {
    super.deleteOnClick(index);
    console.log('Product has been deleted.');
  }
}
