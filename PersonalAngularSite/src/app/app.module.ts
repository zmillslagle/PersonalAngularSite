import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { AboutComponent } from './about/about.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { PhotographyComponent } from './photography/photography.component';


@NgModule({
  declarations: [
    AppComponent,
    AppMenuComponent,
    AboutComponent,
    AppHeaderComponent,
    PhotographyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
