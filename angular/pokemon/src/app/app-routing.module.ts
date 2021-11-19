import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [//C'est ce code là qui gérà les chemins (url)

  {
    path: '',//Va regarder ce qui se passe dans l'URL...Si mon url est vide alors...
    component : HomeComponent
  },
  {
    path: 'Contact',
    component : ContactComponent
  },
  {
    path: 'detail/:id',//On souhaiterais faire varier la page en fonction de l'id d'où le ":/id"
    component : DetailComponent
  }

]; 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
