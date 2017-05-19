import { Up } from './models/up';

export interface AppStore {
    ups: Up[];
    data: Object[];
}