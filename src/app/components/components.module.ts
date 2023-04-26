import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
// import { TableComponent } from './table/table.component';



@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    RouterModule, 
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
  ],
  exports:[SidebarComponent]
})
export class ComponentsModule { }
