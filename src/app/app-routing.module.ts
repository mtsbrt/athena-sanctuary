import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SanctuaryComponent } from './components/sanctuary/sanctuary.component';


const routes: Routes = [
  {
    path: 'sanctuary',
    component: SanctuaryComponent
  },
  {
    path: '',
    redirectTo: '/sanctuary',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
