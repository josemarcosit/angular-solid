import { Component } from '@angular/core';
import { Product } from 'src/app/interface-segregation-problem/interface-segregation/product';
import { ProductsSolution } from 'src/app/interface-segregation-solution/interface-segregation-solution/interfaces/product-solution';
import { ItemBaseComponent } from 'src/app/liskov-substitution-problem/product-base';
import { ProductService } from 'src/app/single-responsibility-solution/product.service';

@Component({
  selector: 'app-content-section-list',
  templateUrl: './content-section-list.component.html',
  styleUrls: ['./content-section-list.component.scss']
})
export class ContentSectionListComponent extends ItemBaseComponent
implements ProductsSolution {
  override products: Product[] = [];

  constructor(private productService: ProductService) {
    super();
  }

  ngOnInit(): void {
   this.products = this.productService.getProducts();
  }
}

