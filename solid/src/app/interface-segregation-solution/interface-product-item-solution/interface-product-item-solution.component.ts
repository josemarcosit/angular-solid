import { Component } from '@angular/core';
import { ItemBaseComponent } from 'src/app/liskov-substitution-problem/product-base';
import { ProductsSolution } from '../interface-segregation-solution/interfaces/product-solution';
import { Product } from 'src/app/interface-segregation-problem/interface-segregation/product';
import { ProductService } from 'src/app/single-responsibility-solution/product.service';
import { DeletableSolution } from '../interface-segregation-solution/interfaces/deletable-solution';

@Component({
  selector: 'app-interface-product-item-solution',
  templateUrl: './interface-product-item-solution.component.html',
  styleUrls: ['./interface-product-item-solution.component.scss']
})
export class InterfaceProductItemSolutionComponent
  extends ItemBaseComponent
  implements ProductsSolution, DeletableSolution {
    override products: Product[] = [];

    constructor(private productService: ProductService) {
      super();
    }

    ngOnInit(): void {
      this.products = this.productService.getProducts();
    }

    override deleteOnClick(index: number): void {
      super.deleteOnClick(index);
      console.log('Product has been deleted.');
    }
  }

