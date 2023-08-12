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
import { InterfaceSegregationComponent } from './interface-segregation-problem/interface-segregation/interface-segregation.component';
import { InterfaceProductItemComponent } from './interface-segregation-problem/interface-product-item/interface-product-item.component';
import { InterfaceProductListComponent } from './interface-segregation-problem/interface-product-list/interface-product-list.component';
import { InterfaceSegregationSolutionComponent } from './interface-segregation-solution/interface-segregation-solution/interface-segregation-solution.component';
import { InterfaceProductItemSolutionComponent } from './interface-segregation-solution/interface-product-item-solution/interface-product-item-solution.component';
import { InterfaceProductListSolutionComponent } from './interface-segregation-solution/interface-product-list-solution/interface-product-list-solution.component';
import { DependencyProductItemComponent } from './dependency-inversion-problem/dependency-product-item/dependency-product-item.component';
import { DependencyInversionComponent } from './dependency-inversion-problem/dependency-inversion/dependency-inversion.component';
import { DependencyInversionSolutionComponent } from './dependency-inversion-solution/dependency-inversion-solution/dependency-inversion-solution.component';
import { LoggerSolutionService } from './dependency-inversion-solution/logger-solution.service';
import { DependencyProductItemSolutionComponent } from './dependency-inversion-solution/dependency-product-item-solution/dependency-product-item-solution.component';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { FullAppComponent } from './app-full-solution/full-app/full-app.component';
import { ContentComponent } from './app-full-solution/content/content.component';
import { ContentSectionItemComponent } from './app-full-solution/content-section-item/content-section-item.component';
import { ContentSectionListComponent } from './app-full-solution/content-section-list/content-section-list.component';

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
    LiskovProductListSolutionComponent,
    InterfaceSegregationComponent,
    InterfaceProductItemComponent,
    InterfaceProductListComponent,
    InterfaceSegregationSolutionComponent,
    InterfaceProductItemSolutionComponent,
    InterfaceProductListSolutionComponent,
    DependencyProductItemComponent,
    DependencyInversionComponent,
    DependencyInversionSolutionComponent,
    DependencyProductItemSolutionComponent,
    FullAppComponent,
    ContentComponent,
    ContentSectionItemComponent,
    ContentSectionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LoggerModule.forRoot({
      level: NgxLoggerLevel['INFO'],
      serverLogLevel: NgxLoggerLevel['INFO']
    } as any),
  ],
  providers: [
    {
      provide: 'Logger', useClass: LoggerSolutionService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
