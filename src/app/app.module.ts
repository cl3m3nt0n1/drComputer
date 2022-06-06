import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { HeaderComponent } from './header/header.component';
import { ConfigurateurComponent } from './configurateur/configurateur.component';
import { ComposantConfigComponent } from './composant-config/composant-config.component';
import { ListeComposantsComponent } from './liste-composants/liste-composants.component';
import { HttpClientModule } from '@angular/common/http';


const appRoutes: Routes = [
  {path: 'login', component: ConnexionComponent},
  {path: '**', component: AppComponent},
  { path: 'config', component: ConfigurateurComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    HeaderComponent,
    ConfigurateurComponent,
    ComposantConfigComponent,
    ListeComposantsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
