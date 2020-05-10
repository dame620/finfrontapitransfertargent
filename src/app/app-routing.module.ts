import { ConnexionComponent } from './pages/connexion/connexion.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AffichagegetroleComponent } from './pages/affichagegetrole/affichagegetrole.component';
import { GetadduserComponent } from './pages/getadduser/getadduser.component';
import { ShowgetuserComponent } from './pages/showgetuser/showgetuser.component';
import { ShowgetcompteComponent } from './pages/showgetcompte/showgetcompte.component';
import { GetaddcompteComponent } from './pages/getaddcompte/getaddcompte.component';
import { GetadddepotComponent } from './pages/getadddepot/getadddepot.component';
import { ShowaddaffectationComponent } from './pages/showaddaffectation/showaddaffectation.component';
import { ShowaddtransactionComponent } from './pages/showaddtransaction/showaddtransaction.component';
import { ShowaddretraitComponent } from './pages/showaddretrait/showaddretrait.component';


const routes: Routes = [
  {path:'login',component:ConnexionComponent},
  {path: 'home',component: HomeComponent},
  {path: 'getrole',component:  AffichagegetroleComponent},
  {path: 'adduser',component:  GetadduserComponent},
  {path: 'getuser',component:  ShowgetuserComponent},
  {path: 'getcompte',component:  ShowgetcompteComponent},
  {path: 'addcompte',component:  GetaddcompteComponent},
  {path: 'adddepot',component:  GetadddepotComponent},
  {path: 'addaffectation',component:  ShowaddaffectationComponent},
  {path: 'addenvoi',component:  ShowaddtransactionComponent},
  {path: 'addretrait',component:  ShowaddretraitComponent},
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
