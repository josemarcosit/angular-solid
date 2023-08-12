import { Component } from '@angular/core';
import { ProductService } from 'src/app/single-responsibility-solution/product.service';

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.scss']
})
export class OpenCloseComponent {
  constructor(private productService: ProductService) {
  }

  onProductAdded(product:any){
    this.productService.add(product);
  }
}
