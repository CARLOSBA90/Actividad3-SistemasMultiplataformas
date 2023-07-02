import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { InitialComponent } from './initial/initial.component';

const routes: Routes = [
  { path: '', component: InitialComponent },
  { path: 'home', component: HomeComponent },
  // Define other routes
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InitialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes) // Configure the routes using forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
