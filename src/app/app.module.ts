import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { LojmanFormComponent } from './lojman/form/lojman-form.component';
import { LojmanListComponent } from './lojman/list/lojman-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LojmanListComponent,
    NavbarComponent,
    LojmanFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
