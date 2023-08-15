import { Component, Input } from '@angular/core';
import { ProductService } from 'src/app/single-responsibility-solution/product.service';
import { Products } from '../interface-segregation/interfaces/products';
import { Product } from '../interface-segregation/product';
import { ItemBaseComponent } from 'src/app/liskov-substitution-problem/product-base';

@Component({
  selector: 'app-interface-product-list',
  templateUrl: './interface-product-list.component.html',
  styleUrls: ['./interface-product-list.component.scss']
})
export class InterfaceProductListComponent
extends ItemBaseComponent
implements Products {
  override products: Product[] = [];

  constructor(private productService: ProductService) {
    super();
  }

  ngOnInit() {
   this.products = this.productService.getProducts();
  }
}

