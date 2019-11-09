import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Saint } from './models/saint.model';

@Injectable({
    providedIn: 'root'
})
export class SaintService {

    private baseUrl = 'http://localhost:3000/saints';
    constructor(
        private http: HttpClient
    ) { }

    public getSaints(): Observable<Saint[]> {
        return this.http.get<Saint[]>(this.baseUrl);
    }

    public getSaintByCloth(cloth: string): Observable<Saint> {
        return this.http.get<Saint>(`${this.baseUrl}?cloth=${cloth}`)
    }
    public getGoldSaints(): Observable<Saint[]> {
        return this.http.get<Saint[]>(this.baseUrl)
        .pipe(map(response => response.filter(x => x.clothRank === 'Gold')));
    }
}
