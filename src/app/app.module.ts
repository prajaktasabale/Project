import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdmissionComponent } from './admission/admission.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import {NgModel, FormsModule, NgForm} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { EditComponent } from './edit/edit.component';
import { NewsComponent } from './news/news.component';
import { EventsComponent } from './events/events.component';
import { SyllabusComponent } from './syllabus/syllabus.component';
import { EbooksComponent } from './ebooks/ebooks.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    AdmissionComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    NotFoundComponent,
    EditComponent,
    NewsComponent,
    EventsComponent,
    SyllabusComponent,
    EbooksComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
    {path:"",component:AppComponent},
    {path:"home",component:HomeComponent},
    {path:"register",component:RegisterComponent},
    {path:"aboutus",component:AboutusComponent},
    {path:"login",component:LoginComponent},
    {path:"logout",component:LogoutComponent},
    {path:"admission",component:AdmissionComponent},
    {path:"**",component:NotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
