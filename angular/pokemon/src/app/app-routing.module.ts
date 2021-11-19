import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [//C'est ce code là qui gérà les chemins (url)

  {
    path: '',//Va regarder ce qui se passe dans l'URL...Si mon url est vide alors...
    component : HomeComponent
  },
  {
    path: 'Contact',
    component : ContactComponent
  }

]; 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
