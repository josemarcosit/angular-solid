import { Component } from '@angular/core';
import { ProductService } from 'src/app/single-responsibility-solution/product.service';

@Component({
  selector: 'app-dependency-inversion',
  templateUrl: './dependency-inversion.component.html',
  styleUrls: ['./dependency-inversion.component.scss']
})
export class DependencyInversionComponent {
  products:any = [];

  constructor(private productService: ProductService) {
  }
  ngOnInit(): void {
   this.products = this.productService.getProducts();
  }

  onProductAdded(product:any){
    this.productService.add(product);
  }

  onDeleted(value:any){
    console.log(value);
  }
}


