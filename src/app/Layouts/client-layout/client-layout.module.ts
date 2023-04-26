import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClientLayoutsRoutes} from './client-layout.routing'
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { DocumentsComponent } from './documents/documents.component';
import { TableComponent } from 'src/app/components/table/table.component';
// import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [ProfileComponent,DocumentsComponent,TableComponent],
  imports: [
    RouterModule.forChild(ClientLayoutsRoutes),
    CommonModule,
    HttpClientModule,
    // ComponentsModule
    
  ],
  exports:[TableComponent]
})
export class ClientLayoutModule { }


