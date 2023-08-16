import { Component } from '@angular/core';
import { ProductService } from 'src/app/single-responsibility-solution/product.service';

@Component({
  selector: 'app-full-app',
  templateUrl: './full-app.component.html',
  styleUrls: ['./full-app.component.scss'],
})
export class FullAppComponent {
  constructor(private productService: ProductService) {}

  onProductAdded(product: any) {
    this.productService.add(product);
  }
}
