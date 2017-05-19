import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { $ } from "jquery";
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { InceptionComponent } from './inception/inception.component';
import { ProjectsComponent } from './projects/projects.component';
import { TransitionComponent } from './transition/transition.component';
import { ElaborationComponent } from './elaboration/elaboration.component';
import { ConstructionComponent } from './construction/construction.component';
import { TinymceModule } from 'angular2-tinymce';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from './core/core.module';
import { UpService } from './services/up.service';
import { ups } from './reducers/up.reducer';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    InceptionComponent,
    ProjectsComponent,
    TransitionComponent,
    ElaborationComponent,
    ConstructionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CoreModule,
    StoreModule.provideStore({
      ups
    }),
    TinymceModule.withConfig({
      // plugins: ['emoticons'],
      // toolbar: 'emoticons'
    }),
    Ng2SmartTableModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [
    UpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
