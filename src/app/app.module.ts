import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { CatPageComponent } from './cat-page/cat-page.component';
import { AdoptCatComponent } from './adopt-cat/adopt-cat.component';
import { ProcessComponent } from './process/process.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NoPageFoundComponent,
    CatPageComponent,
    AdoptCatComponent,
    ProcessComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
