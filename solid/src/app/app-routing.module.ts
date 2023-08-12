import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentComponent } from './single-responsibility-problem/component/component.component';
import { SolutionComponent } from './single-responsibility-solution/solution/solution.component';

const routes: Routes = [
  { path: 'single-responsibility-problem', component: ComponentComponent },
  { path: 'single-responsibility-solution', component: SolutionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
