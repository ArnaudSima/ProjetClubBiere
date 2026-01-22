import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/Header/header.component';
import { HomeComponent } from './Home/home.component';
import { NosProduitsComponent } from './NosProduits/NosProduits.component';
import { AuthComponent } from './Auth/auth.component';
import { FormSignInComponent } from './components/Form/formSignIn.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NosProduitsComponent,
    AuthComponent,
    FormSignInComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
