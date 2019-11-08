import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Saint } from './models/saint.model';
import { Sign } from './models/sign.model';

@Injectable({
    providedIn: 'root'
})
export class SignService {

    public baseUrl = 'http://localhost:3000/signs';
    constructor(
        private http: HttpClient
    ) { }

    public getSigns(): Observable<Sign[]> {
        return this.http.get<Sign[]>(this.baseUrl);
    }
}
