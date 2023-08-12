import { EventEmitter, Input, Output } from "@angular/core";
import { Directive } from '@angular/core';

@Directive()
export class ItemBaseComponent {
   @Input() products:any = [];
   @Output() itemDeleted = new EventEmitter<{ Id: number }>();

   deleteOnClick(index:number){
     this.products.splice(index, 1);
     this.itemDeleted.emit({ Id: index });
   }
}
