import { Component } from '@angular/core';
import { Product } from 'src/app/interface-segregation-problem/interface-segregation/product';
import { DeletableSolution } from 'src/app/interface-segregation-solution/interface-segregation-solution/interfaces/deletable-solution';
import { ProductsSolution } from 'src/app/interface-segregation-solution/interface-segregation-solution/interfaces/product-solution';
import { ItemBaseComponent } from 'src/app/liskov-substitution-problem/product-base';
import { ProductService } from 'src/app/single-responsibility-solution/product.service';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-dependency-product-item',
  templateUrl: './dependency-product-item.component.html',
  styleUrls: ['./dependency-product-item.component.scss']
})
export class DependencyProductItemComponent  extends ItemBaseComponent
implements ProductsSolution, DeletableSolution {
  override products: Product[] = [];

  constructor(private productService: ProductService, private loggerService: LoggerService) {
    super();
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  override deleteOnClick(index: number) {
    super.deleteOnClick(index);
    this.loggerService.info('Product has been deleted.');
  }
}


