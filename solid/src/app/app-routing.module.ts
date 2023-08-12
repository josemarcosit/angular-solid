import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentComponent } from './single-responsibility-problem/component/component.component';
import { SolutionComponent } from './single-responsibility-solution/solution/solution.component';
import { OpenCloseComponent } from './open-close-problem/open-close/open-close.component';
import { OpenCloseSolutionComponent } from './open-close-solution/open-close-solution/open-close-solution.component';
import { LiskovComponent } from './liskov-substitution-problem/liskov/liskov.component';
import { LiskovSolutionComponent } from './liskov-substitution-solution/liskov-solution/liskov-solution.component';

const routes: Routes = [
  { path: 'single-responsibility-problem', component: ComponentComponent },
  { path: 'single-responsibility-solution', component: SolutionComponent },
  { path: 'open-close-problem', component: OpenCloseComponent },
  { path: 'open-close-solution', component: OpenCloseSolutionComponent },
  { path: 'liskov-substitution-problem', component: LiskovComponent },
  { path: 'liskov-substitution-solution', component: LiskovSolutionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
