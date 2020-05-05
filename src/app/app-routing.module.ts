import { ConnexionComponent } from './pages/connexion/connexion.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AffichagegetroleComponent } from './pages/affichagegetrole/affichagegetrole.component';


const routes: Routes = [
  {path:'login',component:ConnexionComponent},
  {path: 'home',component: HomeComponent},
  {path: 'getrole',component:  AffichagegetroleComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
