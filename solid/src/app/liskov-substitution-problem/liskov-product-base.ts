import { EventEmitter, Input, Output } from "@angular/core";
import { Directive } from '@angular/core';

@Directive()
export class LiskovProductBaseComponent {
   @Input() items:any = [];
   @Output() itemDeleted = new EventEmitter<{ Id: number }>();

   delete(index:number){
     this.items.splice(index, 1);
     this.itemDeleted.emit({ Id: index });
   }
}
