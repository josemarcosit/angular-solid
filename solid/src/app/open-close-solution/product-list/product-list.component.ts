import { Component, Input } from '@angular/core';
import { ProductService } from 'src/app/single-responsibility-solution/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  @Input() products: any = [];

  constructor(private productService: ProductService) {}
  ngOnInit() {
    this.products = this.productService.getProducts();
  }
}
