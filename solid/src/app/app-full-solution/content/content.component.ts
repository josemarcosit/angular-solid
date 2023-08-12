import { Component, Inject } from '@angular/core';
import { Logger } from 'src/app/dependency-inversion-solution/interfaces/logger';
import { ProductService } from 'src/app/single-responsibility-solution/product.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  products:any = [];

  constructor(@Inject('Logger') public logger: Logger, private productService: ProductService) {
  }
  ngOnInit(): void {
   this.products = this.productService.getProducts();
  }

  onProductAdded(product:any){
    this.productService.add(product);
  }

  onDeleted(value:any){
    this.logger.info(value);
  }
}




