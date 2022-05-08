import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComplaintsComponent } from './create-complaints/create-complaints.component';
import { ComplaintsDetailsComponent } from './complaints-details/complaints-details.component';
import { ComplaintsListComponent } from './complaints-list/complaints-list.component';
import { UpdateComplaintsComponent } from './update-complaints/update-complaints.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComplaintsComponent,
    ComplaintsDetailsComponent,
    ComplaintsListComponent,
    UpdateComplaintsComponent,
    
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
