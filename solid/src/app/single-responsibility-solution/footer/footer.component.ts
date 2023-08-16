import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  @Output() productCreated = new EventEmitter<{
    Id: number;
    Name: string;
    Price: string;
  }>();

  add(value: any) {
    let product = {
      Id: 0,
      Name: value.name,
      Price: value.price,
    };
    this.productCreated.emit(product);
  }
}
