import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { UiModule } from './ui/ui.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { HttpClientService } from './services/common/http-client.service'; // Import your service

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule, 
    UiModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    HttpClientModule  // <-- HttpClientModule stays here
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    HttpClientService,  // <-- HttpClientService goes here, in providers
    { provide: "baseUrl", useValue: "https://localhost:7145/api", multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
