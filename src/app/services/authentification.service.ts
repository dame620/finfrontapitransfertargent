import { environment } from './../../environments/environment';
import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Role } from '../models/role';
import { Compte } from '../models/compte';
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  
  private currentUserSubject: BehaviorSubject<User>;

  constructor(private httpClient: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
  }
//recuperation du curent user value
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
}

  getConnexion(user:User){

return this.httpClient.post<User>(`${environment.apiUrl}/login_check`,user).
pipe(map(user => {
  // store user details and jwt token in local storage to keep user logged in between page refreshes
  localStorage.setItem('currentUser', JSON.stringify(user));
  this.currentUserSubject.next(user);
  return user;
}));

  }



  getRoles(){

    return this.httpClient.get<Role>(`${environment.apiUrl}/api/roles`);

  }

  postUser(user){
   
    return this.httpClient.post<User>(`${environment.apiUrl}/api/users`,user);
  }


  getUsers(){

    return this.httpClient.get<User>(`${environment.apiUrl}/api/users`);

  }


  getCompte(){

    return this.httpClient.get<Compte>(`${environment.apiUrl}/api/comptes`);

  }

  postCompte(compte){
   
    return this.httpClient.post<Compte>(`${environment.apiUrl}/api/comptes`,compte);
  }

  getNinea(ninea){
    
    return this.httpClient.get<Compte>(`${environment.apiUrl}/api/comptes?partenaire.ninea=${ninea}`);

  }

}
