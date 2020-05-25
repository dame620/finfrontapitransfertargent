import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../../services/authentification.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {

  formadduser:FormGroup;
  roles: any;
  constructor(private auth: AuthentificationService) { }

  ngOnInit(){
    
    this.formadduser = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
      nomcomplet: new FormControl(''),
      role: new FormControl(''),
  });


  this.auth.getRoles().subscribe(
    data=>{
      this.roles=data["hydra:member"]
      console.log(data["hydra:member"]
      )},
      error=>{
        console.log(error);
      }
  )
}



onAdduser(){
  
  let user={
    username:this.formadduser.value.username,
    password:this.formadduser.value.password,
    nomcomplet:this.formadduser.value.nomcomplet,
    role:this.formadduser.value.role,
    
  };
  /*passage de l'objet user a la methode get connexion le subscribe permet de
   se suscrire a l'evenement click*/
  
  this.auth.postUser(user).subscribe(
    data=>{
      alert("ajout reussi avec success");
      console.log(data);
    },
    //encas d'eereur on peut recuperer l'eereur comme suit
    error=>{
      console.log(error);
      alert("Echec de l'ajout");
    }
  )
  }
  

}
