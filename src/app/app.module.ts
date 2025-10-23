import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { ListaPedidosComponent } from './lista-pedidos/lista-pedidos.component';
import { NovoPedidoComponent } from './novo-pedido/novo-pedido.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPedidosComponent,
    NovoPedidoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



