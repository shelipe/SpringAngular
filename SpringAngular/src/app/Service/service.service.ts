import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../Modelo/Persona';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }


  Url = "http://localhost:9898/personas";
  //Url ='http://localhost:9898/SpringAngular/Persona';

 
  getPersonas(){
   // console.log(this.http.get<Persona[]>(this.Url));
    return this.http.get<Persona[]>(this.Url);
  }

}
