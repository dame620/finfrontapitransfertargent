import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../../services/authentification.service';

@Component({
  selector: 'app-getuser',
  templateUrl: './getuser.component.html',
  styleUrls: ['./getuser.component.scss']
})
export class GetuserComponent implements OnInit {
  users;
 rechercheUser;
 us;
  constructor(private auth: AuthentificationService) { }

  ngOnInit() {

    this.auth.getUsers().subscribe(
      data=>{
        this.users=data["hydra:member"]
        console.log(data["hydra:member"]
        )},
        error=>{
        
          console.log(error);
        }
    )

  // onStatus();

      


  }

  ongetListeusers(){
    this.auth.getUsers().subscribe(
      data=>{
        this.users=data["hydra:member"]
        console.log(data["hydra:member"]
        )},
        error=>{
          alert('Veuillez vous authentifiez');
          console.log(error);
        }
    )
}

onStatus(id: number){

this.auth.getStatus(id).subscribe(
  data=>{
    alert(JSON.stringify(data["message"]));
    console.log(data);
    
    this.auth.getUsers().subscribe(
      data=>{
        this.users=data["hydra:member"]
        console.log(data["hydra:member"]
        )},
        error=>{
          alert('Veuillez vous authentifiez');
          console.log(error);
        }
    )
  
  },
  error=>{
    alert("ATTENTION VOUS NE POUVEZ PAS LE BLOQUER");
    console.log(error);
  }

)
}


}
