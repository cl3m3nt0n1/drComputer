import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { type } from 'os';
import { Composant } from './data/Composant';

@Injectable({
  providedIn: 'root'
})
export class ComposantServiceService {

  constructor(private http: HttpClient) { }

  getComposant() {

    let urlService = "assets/pcs.json";

    // return this.http.get<Composant>(urlService).subscribe(
      // (compo: Composant) =>{
        // type: 
      // }
    // ) ; 

  }
  
}
