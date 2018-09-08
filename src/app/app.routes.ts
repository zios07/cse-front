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

export const routes: Routes = [
    { path: "", component: HomeComponent},
    { path: "login", component: LoginComponent},
    { path: "properties/all", component: AllPropertiesComponent},
    { path: "properties/selection", component: SelectionPropertiesComponent},
    { path: "properties/:id", component: PropertyDetailsComponent},
    { path: "developments/all", component: AllDevelopmentsComponent},
    { path: "developments/new", component: NewDevelopmentsComponent},
    { path: "developments/:id", component: DevelopmentDetailsComponent},
    { path: "news", component: NewsComponent}
]