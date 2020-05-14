import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../../services/authentification.service';

@Component({
  selector: 'app-listtransaction',
  templateUrl: './listtransaction.component.html',
  styleUrls: ['./listtransaction.component.scss']
})
export class ListtransactionComponent implements OnInit {
  transactions;
  constructor(private auth: AuthentificationService) { }

  ngOnInit() {

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
