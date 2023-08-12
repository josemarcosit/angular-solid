import { Component, Inject } from '@angular/core';
import { ProductService } from 'src/app/single-responsibility-solution/product.service';
import { Logger } from '../interfaces/logger';

@Component({
  selector: 'app-dependency-inversion-solution',
  templateUrl: './dependency-inversion-solution.component.html',
  styleUrls: ['./dependency-inversion-solution.component.scss']
})
export class DependencyInversionSolutionComponent {
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



