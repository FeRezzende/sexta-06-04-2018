import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaService} from './service/categoria.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { ClienteComponent } from './cliente/cliente.component';
import { ClienteService } from './service/cliente.service';


@NgModule({
  declarations: [
    AppComponent,
    CategoriaComponent,
    ClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CategoriaService, ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
