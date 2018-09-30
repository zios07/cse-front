import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";
import { AllPropertiesComponent } from "./pages/properties/all-properties/all-properties.component";
import { PropertyDetailsComponent } from "./pages/properties/property-details/property-details.component";
import { AllDevelopmentsComponent } from "./pages/developments/all-developments/all-developments.component";
import { DevelopmentDetailsComponent } from "./pages/developments/development-details/development-details.component";
import { NewsComponent } from "./pages/news/news.component";
import { NewDevelopmentsComponent } from "./pages/developments/new-developments/new-developments.component";
import { SelectionPropertiesComponent } from "./pages/properties/selection-properties/selection-properties.component";
import { AllLocationsComponent } from "./pages/locations/all-locations/all-locations.component";
import { PropertyListComponent } from "./pages/admin/properties/property-list/property-list.component";
import { PropertyFormComponent } from "./pages/admin/properties/property-form/property-form.component";
import { LocationListComponent } from "./pages/admin/locations/location-list/location-list.component";
import { LocationFormComponent } from "./pages/admin/locations/location-form/location-form.component";
import { TypeListComponent } from "./pages/admin/types/type-list/type-list.component";
import { TypeFormComponent } from "./pages/admin/types/type-form/type-form.component";
import { UserListComponent } from "./pages/admin/users/user-list/user-list.component";
import { UserFormComponent } from "./pages/admin/users/user-form/user-form.component";
import { AuthGuard } from "./guards/auth.guard";
import { AdminGuard } from "./guards/admin.guard";
import { SubareaListComponent } from "./pages/admin/subareas/subarea-list/subarea-list.component";
import { SubareaFormComponent } from "./pages/admin/subareas/subarea-form/subarea-form.component";

export const routes: Routes = [
    { path: "", component: HomeComponent},
    { path: "news", component: NewsComponent},
    { path: "login", component: LoginComponent},
    { path: "properties/all", component: AllPropertiesComponent},
    { path: "properties/selection", component: SelectionPropertiesComponent},
    { path: "properties/:id", component: PropertyDetailsComponent},
    { path: "developments/all", component: AllDevelopmentsComponent},
    { path: "developments/new", component: NewDevelopmentsComponent},
    { path: "developments/:id", component: DevelopmentDetailsComponent},
    { path: "locations/all", component: AllLocationsComponent},
    { path: "properties/location/:id", component: AllPropertiesComponent},
    { path: "admin/properties", component: PropertyListComponent, canActivate: [AuthGuard, AdminGuard]},
    { path: "admin/properties/new", component: PropertyFormComponent, canActivate: [AuthGuard, AdminGuard]},
    { path: "admin/properties/:id", component: PropertyFormComponent, canActivate: [AuthGuard, AdminGuard]},
    { path: "admin/locations", component: LocationListComponent, canActivate: [AuthGuard, AdminGuard]},
    { path: "admin/locations/new", component: LocationFormComponent, canActivate: [AuthGuard, AdminGuard]},
    { path: "admin/locations/:id", component: LocationFormComponent, canActivate: [AuthGuard, AdminGuard]},
    { path: "admin/subareas", component: SubareaListComponent, canActivate: [AuthGuard, AdminGuard]},
    { path: "admin/subareas/new", component: SubareaFormComponent, canActivate: [AuthGuard, AdminGuard]},
    { path: "admin/subareas/:id", component: SubareaFormComponent, canActivate: [AuthGuard, AdminGuard]},
    { path: "admin/types", component: TypeListComponent, canActivate: [AuthGuard, AdminGuard]},
    { path: "admin/types/new", component: TypeFormComponent, canActivate: [AuthGuard, AdminGuard]},
    { path: "admin/types/:id", component: TypeFormComponent, canActivate: [AuthGuard, AdminGuard]},
    { path: "admin/users/new", component: UserFormComponent, canActivate: [AuthGuard, AdminGuard]},
    { path: "admin/users", component: UserListComponent, canActivate: [AuthGuard, AdminGuard]},
    { path: "admin/users/:id", component: UserFormComponent, canActivate: [AuthGuard, AdminGuard]},
    { path: "**", component: HomeComponent}
]
