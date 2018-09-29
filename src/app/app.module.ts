import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbCarouselModule, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './pages/partials/header/header.component';
import { FooterComponent } from './pages/partials/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
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
import { PropertyListComponent } from './pages/admin/properties/property-list/property-list.component';
import { PropertyFormComponent } from './pages/admin/properties/property-form/property-form.component';
import { LocationFormComponent } from './pages/admin/locations/location-form/location-form.component';
import { LocationListComponent } from './pages/admin/locations/location-list/location-list.component';
import { TypeFormComponent } from './pages/admin/types/type-form/type-form.component';
import { TypeListComponent } from './pages/admin/types/type-list/type-list.component';
import { UserListComponent } from './pages/admin/users/user-list/user-list.component';
import { UserFormComponent } from './pages/admin/users/user-form/user-form.component';
import { HttpModule } from '@angular/http';
import { DataTablesModule } from 'angular-datatables';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileUploadModule } from 'primeng/fileupload';
import { TableModule } from 'primeng/table';

import { ToastrModule } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/primeng';
import {DialogModule} from 'primeng/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    AllPropertiesComponent,
    PropertyDetailsComponent,
    AllDevelopmentsComponent,
    DevelopmentDetailsComponent,
    NewsComponent,
    NewDevelopmentsComponent,
    SelectionPropertiesComponent,
    AllLocationsComponent,
    PropertyListComponent,
    PropertyFormComponent,
    LocationFormComponent,
    LocationListComponent,
    TypeFormComponent,
    TypeListComponent,
    UserListComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    HttpModule,
    FormsModule,
    NgbModule,
    NgbCarouselModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    FileUploadModule,
    TableModule,
    ConfirmDialogModule,
    DialogModule
  ],
  providers: [
    NgbCarouselConfig,
    DatePipe,
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
