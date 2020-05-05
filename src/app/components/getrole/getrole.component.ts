import { Component, OnInit } from '@angular/core';
import { RoleService } from '../../services/role.service';
import { AuthentificationService } from '../../services/authentification.service';

@Component({
  selector: 'app-getrole',
  templateUrl: './getrole.component.html',
  styleUrls: ['./getrole.component.scss']
})
export class GetroleComponent implements OnInit {
  roles;
  constructor(private auth: AuthentificationService) { }

  ngOnInit(): void {
  }

  ongetRoles(){
    this.auth.getRoles().subscribe(
      data=>{
        this.roles=data["hydra:member"]
        console.log(data["hydra:member"]
        )},
        error=>{
          alert('Veuillez vous authentifiez');
          console.log(error);
        }
    )
}

}
