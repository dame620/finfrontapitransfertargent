import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../../services/authentification.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-listtransaction',
  templateUrl: './listtransaction.component.html',
  styleUrls: ['./listtransaction.component.scss']
})
export class ListtransactionComponent implements OnInit {
  transactions;
  formaddrecherche:FormGroup;
  cherche;
  trouve;
  rechercheUser;

  constructor(private auth: AuthentificationService) { }

  ngOnInit() {

    this.cherche=0;
    this.formaddrecherche = new FormGroup({
      datetrans: new FormControl(''),   
  });
  this.existe();
   this.auth.gettransaction().subscribe(
      data=>{
        this.transactions=data["hydra:member"]
        console.log(data["hydra:member"]
        )},
        error=>{
        
          console.log(error);
        }
    )

    

  }

  existe()
  {
    this.formaddrecherche.get('datetrans').valueChanges.subscribe(val=>
      {

      this.auth.getDate(val).subscribe(
      data=>
      {
        console.log(this.transactions=data["hydra:member"]);
        if(data["hydra:member"] !=null)
        {

         
          this.cherche=0;

        }


      })

        }

    );

  }


  ongetListetransaction(){

   this.auth.gettransaction().subscribe(
    data=>{
      this.transactions=data["hydra:member"]
      console.log(data["hydra:member"]
      )},
      error=>{
      
        console.log(error);
      }
  )

  }

}
