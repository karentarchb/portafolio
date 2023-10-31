import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MaterialModule } from '../app/material/material.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { IndexComponent } from './components/index/index.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PicPopComponent } from './components/pop-ups/pic-pop/pic-pop.component';
import { PicPopTwComponent } from './components/pop-ups/pic-pop-tw/pic-pop-tw.component';
import { PicPopTrComponent } from './components/pop-ups/pic-pop-tr/pic-pop-tr.component';
import { PicPopFrComponent } from './components/pop-ups/pic-pop-fr/pic-pop-fr.component';
import { PicPopFiComponent } from './components/pop-ups/pic-pop-fi/pic-pop-fi.component';
import { PicPopSiComponent } from './components/pop-ups/pic-pop-si/pic-pop-si.component';
import { PicPopSeComponent } from './components/pop-ups/pic-pop-se/pic-pop-se.component';
import { PicPopEiComponent } from './components/pop-ups/pic-pop-ei/pic-pop-ei.component';
import { PicPopNiComponent } from './components/pop-ups/pic-pop-ni/pic-pop-ni.component';
import { PicPopTeComponent } from './components/pop-ups/pic-pop-te/pic-pop-te.component';
import { PicPopElComponent } from './components/pop-ups/pic-pop-el/pic-pop-el.component';
import { PicPopTzComponent } from './components/pop-ups/pic-pop-tz/pic-pop-tz.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { AcknowComponent } from './components/acknow/acknow.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    IndexComponent,
    PicPopComponent,
    PicPopTwComponent,
    PicPopTrComponent,
    PicPopFrComponent,
    PicPopFiComponent,
    PicPopSiComponent,
    PicPopSeComponent,
    PicPopEiComponent,
    PicPopNiComponent,
    PicPopTeComponent,
    PicPopElComponent,
    PicPopTzComponent,
    AboutmeComponent,
    AcknowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
