import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.scss'],
})
export class SolutionComponent {
  constructor(private productService: ProductService) {}

  onProductAdded(product: any) {
    this.productService.add(product);
  }
}
