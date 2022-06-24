import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Porfolio/header/header.component';
import { LogoAPComponent } from './Porfolio/logo-ap/logo-ap.component';
import { RedesSocialesComponent } from './Porfolio/redes-sociales/redes-sociales.component';
import { BannerComponent } from './Porfolio/banner/banner.component';
import { AcercadeComponent } from './Porfolio/acercade/acercade.component';
import { ExperienciaComponent } from './Porfolio/experiencia/experiencia.component';
import { EstudiosComponent } from './Porfolio/estudios/estudios.component';
import { TecnologiasComponent } from './Porfolio/tecnologias/tecnologias.component';
import { FooterComponent } from './Porfolio/footer/footer.component';
import { LoginComponent } from './Porfolio/login/login.component';

@NgModule({
  declarations:[
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    RedesSocialesComponent,
    BannerComponent,
    AcercadeComponent,
    ExperienciaComponent,
    EstudiosComponent,
    TecnologiasComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
BrowserModule,
AppRoutingModule,
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
