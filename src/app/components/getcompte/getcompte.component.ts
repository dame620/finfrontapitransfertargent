import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../../services/authentification.service';

@Component({
  selector: 'app-getcompte',
  templateUrl: './getcompte.component.html',
  styleUrls: ['./getcompte.component.scss']
})
export class GetcompteComponent implements OnInit {
  comptes;
  constructor(private auth: AuthentificationService) { }

  ngOnInit() {

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


  ongetListecompte(){
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

}
