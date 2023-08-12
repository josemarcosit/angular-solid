import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentComponent } from './single-responsibility-problem/component/component.component';
import { FormsModule } from '@angular/forms';
import { SolutionComponent } from './single-responsibility-solution/solution/solution.component';
import { HeaderComponent } from './single-responsibility-solution/header/header.component';
import { FooterComponent } from './single-responsibility-solution/footer/footer.component';
import { MainComponent } from './single-responsibility-solution/main/main.component';
import { OpenCloseComponent } from './open-close-problem/open-close/open-close.component';
import { OpenCloseSolutionComponent } from './open-close-solution/open-close-solution/open-close-solution.component';
import { ProductItemComponent } from './open-close-solution/product-item/product-item.component';
import { ProductListComponent } from './open-close-solution/product-list/product-list.component';
import { LiskovComponent } from './liskov-substitution-problem/liskov/liskov.component';
import { LiskovProductItemComponent } from './liskov-substitution-problem/liskov-product-item/liskov-product-item.component';
import { LiskovProductListComponent } from './liskov-substitution-problem/liskov-product-list/liskov-product-list.component';
import { LiskovSolutionComponent } from './liskov-substitution-solution/liskov-solution/liskov-solution.component';
import { LiskovProductListSolutionComponent } from './liskov-substitution-solution/liskov-product-list-solution/liskov-product-list-solution.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    SolutionComponent,
    SolutionComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    OpenCloseComponent,
    OpenCloseSolutionComponent,
    ProductItemComponent,
    ProductListComponent,
    LiskovComponent,
    LiskovProductItemComponent,
    LiskovProductListComponent,
    LiskovSolutionComponent,
    LiskovProductListSolutionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
