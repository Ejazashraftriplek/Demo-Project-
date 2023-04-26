import { Routes } from "@angular/router";
import { ProfileComponent } from "./profile/profile.component";
import { DocumentsComponent } from "./documents/documents.component";

export const ClientLayoutsRoutes:Routes=[
    {path:'profile',
    component:ProfileComponent},
    {path:'document', component:DocumentsComponent}

 ]