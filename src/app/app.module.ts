import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './view/productos/productos.component';
import { HomeComponent } from './view/home/home.component';
import { EmpresaComponent } from './view/empresa/empresa.component';
import { EspecialesComponent } from './view/especiales/especiales.component';
import { ContactoComponent } from './view/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    HomeComponent,
    EmpresaComponent,
    EspecialesComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
