import { NgModule } from '@angular/core';
import { MsalModule, MsalInterceptor } from '@azure/msal-angular';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogLevel } from '@azure/msal-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ClientLayoutComponent } from './Layouts/client-layout/client-layout.component';
import { ComponentsModule } from './components/components.module';
// import { DocumentsComponent } from './Layouts/documents/documents.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientLayoutComponent,
    // DocumentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }