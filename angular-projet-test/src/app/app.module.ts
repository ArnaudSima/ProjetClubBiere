import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/Header/header.component';
import { HomeComponent } from './Home/home.component';
import { NosProduitsComponent } from './NosProduits/NosProduits.component';
import { AuthComponent } from './Module/Security/auth.component';
import { FormSignInComponent } from './components/Form/formSignIn.component';
import { FormsModule } from '@angular/forms';
import { DashBoardComponent } from './DashBoard/dashboard.component';
import { AgeVerificationDirective } from '../directives/age-verification-directive.directive';
import { TranslationPipe } from '../pipes/translate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NosProduitsComponent,
    AuthComponent,
    FormSignInComponent,
    DashBoardComponent,
    AgeVerificationDirective,
    TranslationPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
