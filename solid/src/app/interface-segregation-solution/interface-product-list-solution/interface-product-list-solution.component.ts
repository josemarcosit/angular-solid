import { Component } from '@angular/core';
import { ItemBaseComponent } from 'src/app/liskov-substitution-problem/product-base';
import { ProductsSolution } from '../interface-segregation-solution/interfaces/product-solution';
import { Product } from 'src/app/interface-segregation-problem/interface-segregation/product';
import { ProductService } from 'src/app/single-responsibility-solution/product.service';

@Component({
  selector: 'app-interface-product-list-solution',
  templateUrl: './interface-product-list-solution.component.html',
  styleUrls: ['./interface-product-list-solution.component.scss'],
})
export class InterfaceProductListSolutionComponent implements ProductsSolution {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }
}
