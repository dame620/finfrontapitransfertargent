import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthentificationService } from '../../services/authentification.service';

@Component({
  selector: 'app-addtransaction',
  templateUrl: './addtransaction.component.html',
  styleUrls: ['./addtransaction.component.scss']
})
export class AddtransactionComponent implements OnInit {

  formaddenvoi:FormGroup;
  envois: any;
  constructor (private auth: AuthentificationService) { }

  ngOnInit(){
    
    this.formaddenvoi = new FormGroup({
      
      montanttransaction: new FormControl(''),
      nomemmeteur: new FormControl(''),
      nomdestinataire: new FormControl(''),
      telemetteur: new FormControl(''),
      teldestinataire: new FormControl(''),
      cniemetteur: new FormControl(''),
      

  });

}

onAddenvoi(){
  
  let envoi={
    montanttransaction:this.formaddenvoi.value.montanttransaction,
    nomemmeteur:this.formaddenvoi.value.nomemmeteur,
    nomdestinataire:this.formaddenvoi.value.nomdestinataire,
    cniemetteur:this.formaddenvoi.value.cniemetteur,
    telemetteur:this.formaddenvoi.value.telemetteur,
    teldestinataire:this.formaddenvoi.value.teldestinataire,
    
    
  };
  /*passage de l'objet user a la methode get connexion le subscribe permet de
   se suscrire a l'evenement click*/
  
  this.auth.postEnvoi(envoi).subscribe(
    data=>{
      //alert("ajout reussi avec success"+ JSON.stringify(data));
      alert(JSON.stringify(data));
      console.log(data);
    },
    //encas d'eereur on peut recuperer l'eereur comme suit
    error=>{
      console.log(error);
      alert("echec de la transaction");
    }
  )

  


  }


}
