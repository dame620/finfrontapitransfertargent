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



@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    FormConnexionComponent,
    GetroleComponent,
    AffichagegetroleComponent,
    HomeComponent
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
