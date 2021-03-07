import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from"@angular/common/http"
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import{RouterModule} from "@angular/router";
import{appRoute} from"./route";
import { AboutComponent } from './about/about.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BlogComponent } from './blog/blog.component';
import { NewsComponent } from './news/news.component';
import{ContactComponent} from "./contact/contact.component"
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    AboutComponent,
    BlogComponent,
    NewsComponent,
    ContactComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    PopoverModule.forRoot(),
    TooltipModule.forRoot()
 
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
