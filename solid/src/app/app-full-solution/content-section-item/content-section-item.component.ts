import { Component, Inject } from '@angular/core';
import { Logger } from 'src/app/dependency-inversion-solution/interfaces/logger';
import { Product } from 'src/app/interface-segregation-problem/interface-segregation/product';
import { DeletableSolution } from 'src/app/interface-segregation-solution/interface-segregation-solution/interfaces/deletable-solution';
import { ProductsSolution } from 'src/app/interface-segregation-solution/interface-segregation-solution/interfaces/product-solution';
import { ItemBaseComponent } from 'src/app/liskov-substitution-problem/product-base';
import { ProductService } from 'src/app/single-responsibility-solution/product.service';

@Component({
  selector: 'app-content-section-item',
  templateUrl: './content-section-item.component.html',
  styleUrls: ['./content-section-item.component.scss']
})
export class ContentSectionItemComponent  extends ItemBaseComponent
implements ProductsSolution, DeletableSolution {
  override products: Product[] = [];

  constructor(@Inject('Logger') public logger: Logger, private productService: ProductService) {
    super();
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  override deleteOnClick(index: number) {
    super.deleteOnClick(index);
    this.logger.info('Product has been deleted.');
  }
}



