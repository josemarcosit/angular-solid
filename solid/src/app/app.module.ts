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

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    SolutionComponent,
    SolutionComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent
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
