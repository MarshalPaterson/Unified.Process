import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { InceptionComponent } from './inception/inception.component';
import { ProjectsComponent } from './projects/projects.component';
import { TransitionComponent } from './transition/transition.component';
import { ElaborationComponent } from './elaboration/elaboration.component';
import { ConstructionComponent } from './construction/construction.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'projects', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'inception', component: InceptionComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'transition', component: TransitionComponent },
  { path: 'elaboration', component: ElaborationComponent },
  { path: 'construction', component: ConstructionComponent }
];

