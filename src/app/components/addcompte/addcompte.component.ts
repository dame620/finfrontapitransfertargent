import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthentificationService } from '../../services/authentification.service';
import { Compte } from '../../models/compte';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcompte',
  templateUrl: './addcompte.component.html',
  styleUrls: ['./addcompte.component.scss']
})
export class AddcompteComponent implements OnInit {
  formaddcompte:FormGroup;
  cherche;
  comptesnew: any;
  compte: any;
  iripart: any;
  comptesold: any;
  nomcomplet: any;
  password: any;
  username: any;
  ninea: any;
  rc: any;
  constructor(private auth: AuthentificationService, private router:Router) { }

  ngOnInit() {
    this.cherche=0;

    this.formaddcompte = new FormGroup({
      montantdepot: new FormControl(''),
      username: new FormControl(''),
      password: new FormControl(''),
      nomcomplet: new FormControl(''),
      ninea: new FormControl(''),
      rc: new FormControl(''),
      
  });

  this.existe();

  }
  existe()
    {
      this.formaddcompte.get('ninea').valueChanges.subscribe(val=>
        {
  
        this.auth.getNinea(val).subscribe(
        data=>
        {
          console.log(this.compte=data["hydra:member"]);
          if(data["hydra:member"][0])
          {

            
            this.iripart=(data["hydra:member"][0].partenaire['@id']);
            this.rc = data["hydra:member"][0].partenaire.rc;
            this.nomcomplet = data["hydra:member"][0].partenaire.users[0].nomcomplet;
            this.username = data["hydra:member"][0].partenaire.users[0].username;
            this.password = data["hydra:member"][0].partenaire.users[0].password;


            this.formaddcompte.get('username').disable();
            this.formaddcompte.get('password').disable();
            this.formaddcompte.get('rc').disable();
            this.formaddcompte.get('nomcomplet').disable();
  
           this.cherche=1;
  
          }else{

            this.formaddcompte.get('rc').enable();
            this.formaddcompte.get('username').enable();
            this.formaddcompte.get('password').enable();
            this.formaddcompte.get('nomcomplet').enable();

           this.cherche=0;
          }
  
  
        })
  
          }
  
      );
  
    }
  




  onAddcompte(){

    if(this.cherche == 0){

      let comptesnew={
        "depots": [
          {
            montantdepot:this.formaddcompte.value.montantdepot,
            
              }
        ],
  
        "partenaire": {
          
      
          ninea:this.formaddcompte.value.ninea,
          rc:this.formaddcompte.value.rc,
          "users": [
            {
             
              username:this.formaddcompte.value.username,
              password:this.formaddcompte.value.password,
              nomcomplet:this.formaddcompte.value.nomcomplet,
             
            }
          ]
        }
     
      };

      this.auth.postCompte(comptesnew).subscribe(
        data=>{
          alert("ajout reussi avec success");
          console.log(data);
          //localStorage.setItem("token",data.token);
          this.router.navigate(['getcompte']);
        },
        //encas d'eereur on peut recuperer l'eereur comme suit
        error=>{
          console.log(error);
        }
      )
     


    }
  
    /*passage de l'objet user a la methode get connexion le subscribe permet de
     se suscrire a l'evenement click*/
    
     if(this.cherche == 1){

      let comptesold = {} as Compte;
    
      comptesold.depots=[
               {

                  montantdepot:this.formaddcompte.value.montantdepot
               }
              ],
      comptesold.partenaire = this.iripart;
     console.log(comptesold);

     this.auth.postCompte(comptesold).subscribe(
      data=>{
        alert("ajout reussi avec success");
        console.log(data);
        //localStorage.setItem("token",data.token);
        this.router.navigate(['getcompte']);
      },
      //encas d'eereur on peut recuperer l'eereur comme suit
      error=>{
        console.log(error);
      }
    )


     }
   


    }
  




}
