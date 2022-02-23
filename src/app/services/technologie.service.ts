import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Technologie } from '../models/technologie.model';

@Injectable()
export class TechnologieService {
    private static readonly ENDPOINT: string = '/api/technologies';

    constructor(private http: HttpClient) { }

    getAllTechnologies(): Observable<Technologie[]> {
        return this.http.get<Technologie[]>(TechnologieService.ENDPOINT);
    }

    fillTechnologiesData(): Observable<void> {
        return this.http.post<void>(`${TechnologieService.ENDPOINT}/fill-data`, null);
    }

    readFile(): Observable<string[]> {
        return this.http.get<string[]>(`${TechnologieService.ENDPOINT}/file`);
    }
}
