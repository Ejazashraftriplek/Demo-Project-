import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientLayoutComponent } from './Layouts/client-layout/client-layout.component';

const routes: Routes = [
  {
  path:'', 
  component:ClientLayoutComponent,
  children:[{
    path:'',
    loadChildren:()=>import ("./Layouts/client-layout/client-layout.module").then(m=>m.ClientLayoutModule)
  }]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
