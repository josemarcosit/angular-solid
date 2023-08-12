import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductService } from 'src/app/single-responsibility-solution/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {
  @Input() products:any = [];

  constructor(private productService: ProductService) {
  }
  ngOnInit(): void {
   this.products = this.productService.getProducts();
  }
  delete(index:number){
    this.products.splice(index, 1);
  }
}
