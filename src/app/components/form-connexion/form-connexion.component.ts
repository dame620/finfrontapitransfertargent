import { AuthentificationService } from './../../services/authentification.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';


@Component({
  selector: 'app-form-connexion',
  templateUrl: './form-connexion.component.html',
  styleUrls: ['./form-connexion.component.scss']
})
export class FormConnexionComponent implements OnInit {

 
  formConnexion:FormGroup;
  constructor(private auth: AuthentificationService, private router:Router) { }

  ngOnInit(){

    this.formConnexion = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
  });

}
onConnexion(){
  
//console.log(this.formConnexion.value);
/*declaration d'un objet user qui permet de recuperer le username qui etait dans
le formulaire et le password*/
let user={
  username:this.formConnexion.value.username,
  password:this.formConnexion.value. password,
};
/*passage de l'objet user a la methode get connexion le subscribe permet de
 se suscrire a l'evenement click*/

this.auth.getConnexion(user).subscribe(
  data=>{
    console.log(data);
    this.router.navigate(['/home']);
  },
  //encas d'eereur on peut recuperer l'eereur comme suit
  error=>{
    console.log(error);
    alert("echec de l'authentification");
  }
)
}
  


  
}


