import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { NosProduitsComponent } from './NosProduits/NosProduits.component';
import { AuthComponent } from './Auth/auth.component';
import { DashBoardComponent } from './DashBoard/dashboard.component';
import { authGuard } from './Services/Auth/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'nos-produits', component: NosProduitsComponent },
  { path: 'auth', component: AuthComponent },
  {
    path: 'dashboard',
    component: DashBoardComponent,
    canActivate: [authGuard],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
