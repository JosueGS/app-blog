import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { SliderComponent } from './components/slider/slider.component';
import { AboutComponent } from './components/about/about.component';
import { LastsWorksComponent } from './components/lasts-works/lasts-works.component';
import { WorkExperiencesComponent } from './components/work-experiences/work-experiences.component';
import { BannerOneComponent } from './components/banner-one/banner-one.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { CjServicesComponent } from './components/cj-services/cj-services.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SliderComponent,
    AboutComponent,
    LastsWorksComponent,
    WorkExperiencesComponent,
    BannerOneComponent,
    ContactComponent,
    FooterComponent,
    CjServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
