import { ShowlisttransactionComponent } from './pages/showlisttransaction/showlisttransaction.component';
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
import { AuthGuard } from './helpers/auth.guard';


const routes: Routes = [
  {path:'',component:ConnexionComponent},
  {path: 'home',component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'getrole',component:  AffichagegetroleComponent, canActivate: [AuthGuard]},
  {path: 'adduser',component:  GetadduserComponent, canActivate: [AuthGuard]},
  {path: 'getuser',component:  ShowgetuserComponent, canActivate: [AuthGuard]},
  {path: 'getcompte',component:  ShowgetcompteComponent, canActivate: [AuthGuard]},
  {path: 'addcompte',component:  GetaddcompteComponent, canActivate: [AuthGuard]},
  {path: 'adddepot',component:  GetadddepotComponent, canActivate: [AuthGuard]},
  {path: 'addaffectation',component:  ShowaddaffectationComponent, canActivate: [AuthGuard]},
  {path: 'addenvoi',component:  ShowaddtransactionComponent, canActivate: [AuthGuard]},
  {path: 'addretrait',component:  ShowaddretraitComponent, canActivate: [AuthGuard]},
  {path: 'gettransaction',component:  ShowlisttransactionComponent, canActivate: [AuthGuard]},
 
  
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
