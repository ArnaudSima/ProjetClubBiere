import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { NosProduitsComponent } from './NosProduits/NosProduits.component';
import { InformationsComponent } from './Informations/informations.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'NosProduits', component: NosProduitsComponent },
  { path: 'Informations', component: InformationsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
