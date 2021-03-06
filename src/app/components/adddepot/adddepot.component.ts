import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthentificationService } from '../../services/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adddepot',
  templateUrl: './adddepot.component.html',
  styleUrls: ['./adddepot.component.scss']
})
export class AdddepotComponent implements OnInit {

  formadddepot:FormGroup;
  comptes: any;
  constructor (private auth: AuthentificationService, private router:Router) { }

  ngOnInit(){
    
    this.formadddepot = new FormGroup({
      montantdepot: new FormControl(''),
      compte: new FormControl(''),
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
}

onAdddepot(){
  
  let depot={
    montantdepot:this.formadddepot.value.montantdepot,
    compte:this.formadddepot.value.compte,
    
  };
  /*passage de l'objet user a la methode get connexion le subscribe permet de
   se suscrire a l'evenement click*/
  
  this.auth.postDepot(depot).subscribe(
    data=>{
      alert("depot reussi avec succes");
      console.log(data);
      this.router.navigate(['home']);
    },
    //encas d'eereur on peut recuperer l'eereur comme suit
    error=>{
      console.log(error);
      alert("echec du depot");
    }
  )

  


  }


}
