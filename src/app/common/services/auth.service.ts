// app/auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators'

import { ApiConst } from '../../common/constants/constants';


@Injectable()
export class AuthService {

    constructor(private http: HttpClient) { }


    signup(params) {
        let url: string = `${ApiConst.BASE_URL}${ApiConst.SIGNUP}`;

        let httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'platform': '3',
                'Authorization': 'my-auth-token'
            })
        };

        return this.http.post(url, params, httpOptions)
            
    };


    login(params) {
        let url: string = `${ApiConst.BASE_URL}${ApiConst.LOGIN}`;
        let httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'platform': '3',
                'Authorization': 'my-auth-token'
            })
        };

        return this.http.post(url, params, httpOptions)
    };

    louout(accessToken) {
        let url: string = `${ApiConst.BASE_URL}${ApiConst.LOOUT}`;
        let httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'platform': '3',
                'accessToken': accessToken
            })
        };

        return this.http.post(url, {}, httpOptions)
    }



}
