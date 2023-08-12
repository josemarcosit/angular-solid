import { Component, Inject } from '@angular/core';
import { Product } from 'src/app/interface-segregation-problem/interface-segregation/product';
import { DeletableSolution } from 'src/app/interface-segregation-solution/interface-segregation-solution/interfaces/deletable-solution';
import { ProductsSolution } from 'src/app/interface-segregation-solution/interface-segregation-solution/interfaces/product-solution';
import { ItemBaseComponent } from 'src/app/liskov-substitution-problem/product-base';
import { ProductService } from 'src/app/single-responsibility-solution/product.service';
import { Logger } from '../interfaces/logger';

@Component({
  selector: 'app-dependency-product-item-solution',
  templateUrl: './dependency-product-item-solution.component.html',
  styleUrls: ['./dependency-product-item-solution.component.scss']
})
export class DependencyProductItemSolutionComponent extends ItemBaseComponent
implements ProductsSolution, DeletableSolution {
  override products: Product[] = [];

  constructor(@Inject('Logger') public logger: Logger, private productService: ProductService) {
    super();
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  override deleteOnClick(index: number): void {
    super.deleteOnClick(index);
    this.logger.info('Product has been deleted.');
  }
}



