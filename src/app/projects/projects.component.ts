import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Up } from '../models/up';
import { UpService } from '../services/up.service';
import { Http, Response } from "@angular/http";
import { Observable, Subscription } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector: 'projects',
  styleUrls: ['./projects.component.css'],
  templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit, OnDestroy {
  ups: Observable<Array<Up>>;
  private subscription: Subscription;
  constructor(
    private upService: UpService
  ) {
    this.ups = upService.ups;
  }
  ngOnInit() {
    this.subscription = this.ups
      .subscribe(ups => {
      }, error => {
      });
    this.upService.loadProjects();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  loadNew() {
  }

  clicked(event) {
    alert(event);
    event.preventDefault();
  }
}
