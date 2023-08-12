import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentComponent } from './single-responsibility-problem/component/component.component';
import { SolutionComponent } from './single-responsibility-solution/solution/solution.component';
import { OpenCloseComponent } from './open-close-problem/open-close/open-close.component';
import { OpenCloseSolutionComponent } from './open-close-solution/open-close-solution/open-close-solution.component';

const routes: Routes = [
  { path: 'single-responsibility-problem', component: ComponentComponent },
  { path: 'single-responsibility-solution', component: SolutionComponent },
  { path: 'open-close-problem', component: OpenCloseComponent },
  { path: 'open-close-solution', component: OpenCloseSolutionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
