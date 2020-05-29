import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthentificationService } from '../../services/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addaffectation',
  templateUrl: './addaffectation.component.html',
  styleUrls: ['./addaffectation.component.scss']
})
export class AddaffectationComponent implements OnInit {

  formaddaffectation:FormGroup;
  comptes: any;
  users: any;
  constructor (private auth: AuthentificationService, private router: Router) { }

  ngOnInit(){
    
    this.formaddaffectation = new FormGroup({
      datedebut: new FormControl(''),
      datefin: new FormControl(''),
      compte: new FormControl(''),
      user: new FormControl(''),
  });


  this.auth.getCompte().subscribe(
    data=>{
      this.comptes=data["hydra:member"]
      console.log(data["hydra:member"]
      )},
      error=>{
        console.log(error);
      }
  )

  this.auth.getUsers().subscribe(
    data=>{
      this.users=data["hydra:member"]
      console.log(data["hydra:member"]
      )},
      error=>{
        console.log(error);
      }
  )
}

onAddaffectation(){
  
  let affect={
    datefin:this.formaddaffectation.value.datefin,
    datedebut:this.formaddaffectation.value.datedebut,
    compte:this.formaddaffectation.value.compte,
    user:this.formaddaffectation.value.user,
    
  };
  /*passage de l'objet user a la methode get connexion le subscribe permet de
   se suscrire a l'evenement click*/
  
  this.auth.postAffectation(affect).subscribe(
    data=>{
      alert("ajout reussi avec success");
      console.log(data);
      this.router.navigate(['home']);
    },
    //encas d'eereur on peut recuperer l'eereur comme suit
    error=>{
      alert("Attention echec de l'affectation");
      console.log(error);
    }
  )

  


  }


}
