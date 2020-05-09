import { ConnexionComponent } from './pages/connexion/connexion.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AffichagegetroleComponent } from './pages/affichagegetrole/affichagegetrole.component';
import { GetadduserComponent } from './pages/getadduser/getadduser.component';
import { ShowgetuserComponent } from './pages/showgetuser/showgetuser.component';
import { ShowgetcompteComponent } from './pages/showgetcompte/showgetcompte.component';
import { GetaddcompteComponent } from './pages/getaddcompte/getaddcompte.component';


const routes: Routes = [
  {path:'login',component:ConnexionComponent},
  {path: 'home',component: HomeComponent},
  {path: 'getrole',component:  AffichagegetroleComponent},
  {path: 'adduser',component:  GetadduserComponent},
  {path: 'getuser',component:  ShowgetuserComponent},
  {path: 'getcompte',component:   ShowgetcompteComponent},
  {path: 'addcompte',component:    GetaddcompteComponent},
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
