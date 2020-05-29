import * as jwt_decode from 'jwt-decode';
import { environment } from './../../environments/environment';
import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Role } from '../models/role';
import { Compte } from '../models/compte';
import { Depot } from '../models/depot';
import { Affectation } from '../models/affectation';
import { Transaction } from '../models/transaction';
//import { jwt_decode } from 'jwt_decode';

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
  console.log(user);
  //decode
  const decoded = jwt_decode(user.token);
  console.log(decoded);
  //
  localStorage.setItem("token",user.token);
  //
  localStorage.setItem('user', JSON.stringify(user));
  //recuperation du role
  localStorage.setItem('roles', JSON.stringify(decoded.roles));
  //
  console.log(localStorage.getItem("roles"))
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


  postDepot(depot){
   
    return this.httpClient.post<Depot>(`${environment.apiUrl}/api/depots`,depot);
   }

   postAffectation(affectation){
   
    return this.httpClient.post<Affectation>(`${environment.apiUrl}/api/affectations`,affectation);
   }

   postEnvoi(envoi){
   
    return this.httpClient.post<Transaction>(`${environment.apiUrl}/api/transactions`,envoi);
   }



  getCode(code){
    return this.httpClient.get<Transaction>(`${environment.apiUrl}/api/transactions?code=${code}`);
  }

   putRetrait(transaction){
    return this.httpClient.put<Transaction>(`${environment.apiUrl}/api/transactions/${transaction.id}`,transaction);
  }
   
  gettransaction(){

    return this.httpClient.get<Transaction>(`${environment.apiUrl}/api/transactions`);

  }

  getDate(datetrans){
    return this.httpClient.get<Transaction>(`${environment.apiUrl}/api/transactions?datetrans[after]=${datetrans}`);
  }

//deconnection
  logout(){

    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);

  }

//fonction pour bloquage
  getStatus(id: number){

    return this.httpClient.get<User>(`${environment.apiUrl}/api/users/${id}`);

  }




}
