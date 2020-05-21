import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../../services/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homecomp',
  templateUrl: './homecomp.component.html',
  styleUrls: ['./homecomp.component.scss']
})
export class HomecompComponent implements OnInit {

  constructor(private auth: AuthentificationService, private router:Router) { }

  ngOnInit() {

  }

  onlogout(){
    this.auth.logout();
    this.router.navigate(['/']);
  }

}
