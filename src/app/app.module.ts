import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MatButtonModule, MatCardModule, MatInputModule, MatSliderModule, MatToolbarModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from './home/home.component';
import { ReactiveFormsDemoComponent } from './home/reactive-forms-demo/reactive-forms-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReactiveFormsDemoComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
