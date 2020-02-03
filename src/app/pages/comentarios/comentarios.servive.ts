import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ComentariosService implements Resolve<Observable<any>> {
    constructor(private httpClient: HttpClient) { }

    resolve() {
       return this.httpClient.get('http://localhost:3000/api/comentarios');
    }
}