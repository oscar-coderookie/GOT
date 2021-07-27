import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlagsService {

  constructor(private http:HttpClient) { }

  getFlags(){
    return this.http.get('https://api.got.show/api/show/houses');
  }

  getFlag(nameFlag: any){
    return this.http.get('https://api.got.show/api/show/houses/'+ nameFlag)
  }
}
