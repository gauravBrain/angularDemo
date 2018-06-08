import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
    constructor() { }
    
    setToken(accessToken : string){
        localStorage.setItem('accessToken' , JSON.stringify(accessToken));
    }
    getToken(){
      return JSON.parse(localStorage.getItem('accessToken'));
    }
    removeToken(){
        localStorage.removeItem('accessToken')
    }
}