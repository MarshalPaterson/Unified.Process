import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Up } from '../models/up';
import { HttpService } from '../core/http.service';
import { AppStore } from '../app.store';

@Injectable()
export class UpService {
    ups: Observable<Array<Up>>;
    projectsUrl = "UpProjects.json";

    constructor(
        private http: HttpService,
        private store: Store<AppStore>
    ) {
        this.ups = store.select(store => store.ups);
    }

    loadProjects() {
        return this.http.get(this.projectsUrl)
            .map((res: Response) => {
                let body = res.json();
                let unsorted = body;
                let keys = Object.keys(unsorted);
                let items = [];
                for (let j = 0; j < keys.length; j++) {
                    items[j] = unsorted[keys[j]];
                }
                return items || {};
            })
            .map((payload: Up[]) => {
                let d = new Array();
                return { type: 'GET_UP_PROJECTS', payload };
            })
            .subscribe((action) => {
                this.store.dispatch(action);
            });
    }
}