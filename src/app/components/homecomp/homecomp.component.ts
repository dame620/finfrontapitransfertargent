import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../../services/authentification.service';
import { Router } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-homecomp',
  templateUrl: './homecomp.component.html',
  styleUrls: ['./homecomp.component.scss']
})
export class HomecompComponent implements OnInit {

  private roles:string[] ;
  user : User;
  constructor(private auth: AuthentificationService, private router:Router) { }

  ngOnInit(): void {
    this.roles= JSON.parse(localStorage.getItem("roles"));
    console.log(this.roles);

    this.user= JSON.parse(localStorage.getItem("user"));
    console.log(this.user);
  }

  isAdminSysorAdm(){
    if(this.roles[0]== "ROLE_ADMIN" || this.roles[0]== "ROLE_SUPADMIN" )return true;
  }
  isUsersys(){
    if(this.roles[0]== "ROLE_ADMIN" || this.roles[0]== "ROLE_SUPADMIN" || this.roles[0]== "ROLE_CAISSIER")return true;
  }

  isForAdduser(){
    if(this.roles[0]== "ROLE_ADMIN" || this.roles[0]== "ROLE_SUPADMIN" || this.roles[0]== "ROLE_ADMINPARTENAIRE" || this.roles[0]== "ROLE_PARTENAIRE")return true;
  }

  isForAffect(){
    if(this.roles[0]== "ROLE_PARTENAIRE" || this.roles[0]== "ROLE_ADMINPARTENAIRE" )return true;
  }
  isCaissier(){
    if(this.roles[0]== "ROLE_CAISSIER" )return true;

  }

  onlogout(){
    this.auth.logout();
    this.router.navigate(['/']);
  }

}
