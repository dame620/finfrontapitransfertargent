import { JwtInterceptor } from './helpers/jwt-interceptor.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { FormConnexionComponent } from './components/form-connexion/form-connexion.component';
import { GetroleComponent } from './components/getrole/getrole.component';
import { AffichagegetroleComponent } from './pages/affichagegetrole/affichagegetrole.component';
import { HomeComponent } from './pages/home/home.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { GetadduserComponent } from './pages/getadduser/getadduser.component';
import { HomecompComponent } from './components/homecomp/homecomp.component';
import { GetuserComponent } from './components/getuser/getuser.component';
import { ShowgetuserComponent } from './pages/showgetuser/showgetuser.component';
import { GetcompteComponent } from './components/getcompte/getcompte.component';
import { ShowgetcompteComponent } from './pages/showgetcompte/showgetcompte.component';
import { AddcompteComponent } from './components/addcompte/addcompte.component';
import { GetaddcompteComponent } from './pages/getaddcompte/getaddcompte.component';
import { AdddepotComponent } from './components/adddepot/adddepot.component';
import { GetadddepotComponent } from './pages/getadddepot/getadddepot.component';



@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    FormConnexionComponent,
    GetroleComponent,
    AffichagegetroleComponent,
    HomeComponent,
    AdduserComponent,
    GetadduserComponent,
    HomecompComponent,
    GetuserComponent,
    ShowgetuserComponent,
    GetcompteComponent,
    ShowgetcompteComponent,
    AddcompteComponent,
    GetaddcompteComponent,
    AdddepotComponent,
    GetadddepotComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
 
  ],
  providers: [

    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
