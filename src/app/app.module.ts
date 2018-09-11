import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule, NgbCarouselModule, NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './pages/partials/header/header.component';
import { FooterComponent } from './pages/partials/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { UsersComponent } from './pages/admin/users/users.component';
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AllPropertiesComponent } from './pages/properties/all-properties/all-properties.component';
import { PropertyDetailsComponent } from './pages/properties/property-details/property-details.component';
import { AllDevelopmentsComponent } from './pages/developments/all-developments/all-developments.component';
import { DevelopmentDetailsComponent } from './pages/developments/development-details/development-details.component';
import { NewsComponent } from './pages/news/news.component';
import { NewDevelopmentsComponent } from './pages/developments/new-developments/new-developments.component';
import { SelectionPropertiesComponent } from './pages/properties/selection-properties/selection-properties.component';
import { AllLocationsComponent } from './pages/locations/all-locations/all-locations.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    UsersComponent,
    AllPropertiesComponent,
    PropertyDetailsComponent,
    AllDevelopmentsComponent,
    DevelopmentDetailsComponent,
    NewsComponent,
    NewDevelopmentsComponent,
    SelectionPropertiesComponent,
    AllLocationsComponent
  ],
  imports: [  
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgbCarouselModule
  ],
  providers: [
    NgbCarouselConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
