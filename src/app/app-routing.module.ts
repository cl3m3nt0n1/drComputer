import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ConfigurateurComponent } from './configurateur/configurateur.component';

const routes: Routes = [
  {path: 'login', component: ConnexionComponent},
  {path: '**', component: AppComponent},
  { path: 'config', component: ConfigurateurComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
