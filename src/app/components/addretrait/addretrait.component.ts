import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthentificationService } from '../../services/authentification.service';
import { Router } from '@angular/router';
import { Transaction } from '../../models/transaction';

@Component({
  selector: 'app-addretrait',
  templateUrl: './addretrait.component.html',
  styleUrls: ['./addretrait.component.scss']
})
export class AddretraitComponent implements OnInit {


  constructor(private auth: AuthentificationService, private router:Router) { }

  formaddretrait:FormGroup;
  cherche;
  code: any;
  retrait: any;
  iritrans: any;
  montanttransaction: number;
  nomemmeteur: any;
  nomdestinataire: any;
  telemetteur: any;
  cniemetteur: any;
  teldestinataire: any;

  ngOnInit() {
    this.cherche=0;

    this.formaddretrait = new FormGroup({
      montanttransaction: new FormControl(''),
      nomemmeteur: new FormControl(''),
      nomdestinataire: new FormControl(''),
      telemetteur: new FormControl(''),
      teldestinataire: new FormControl(''),
      cniemetteur: new FormControl(''),
      code: new FormControl(''),
      cnidestinataire: new FormControl(''),
      
  });

  this.existe();

  }
  existe()
  {
    this.formaddretrait.get('code').valueChanges.subscribe(val=>
      {

      this.auth.getCode(val).subscribe(
      data=>
      {
        console.log(this.retrait=data["hydra:member"]);
        if(data["hydra:member"][0])
        {

          
         
          this.montanttransaction = data["hydra:member"][0].montanttransaction;
          this.nomemmeteur = data["hydra:member"][0].nomemmeteur;
          this.nomdestinataire = data["hydra:member"][0].nomdestinataire;
          this.telemetteur = data["hydra:member"][0].telemetteur;
          this.teldestinataire = data["hydra:member"][0].teldestinataire;
          this.cniemetteur = data["hydra:member"][0].cniemetteur;
          this.iritrans=(data["hydra:member"][0].id);

          this.formaddretrait.get('montanttransaction').disable();
          this.formaddretrait.get('nomemmeteur').disable();
          this.formaddretrait.get('nomdestinataire').disable();
          this.formaddretrait.get('telemetteur').disable();
          this.formaddretrait.get('teldestinataire').disable();
          this.formaddretrait.get('cniemetteur').disable();

         this.cherche=0;

        }


      })

        }

    );

  }


  onAddretrait(){
    if(this.cherche == 0){

      let transretrait={
        cnidestinataire:this.formaddretrait.value.cnidestinataire,
        id:this.iritrans,
     
        
      };

      
    
  
     this.auth.putRetrait(transretrait).subscribe(
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
