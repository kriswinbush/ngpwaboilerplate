import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
//Modules
import { ProductsRoutingModule } from './products-routing.module';
import { Mat2Module } from './mat2.module';

//Components
import { ProductsContainerComponent } from './products-container/products-container.component';
import { ProductsViewComponent } from './products-view/products-view.component';
import { ItemViewComponent } from './item-view/item-view.component';
import { CartViewComponent } from './cart-view/cart-view.component';
//Store
import { CatalogStore } from './store/catalog-store.service';

//service
import { CatalogHttpService } from './services/catalog-http.service';
//load DI service on rootmodule
@NgModule({
  imports: [
    CommonModule,
    /* HttpClientModule, */
    ProductsRoutingModule,
    Mat2Module
  ],
  providers: [/* CatalogStore, CatalogHttpService */],
  declarations: [ProductsContainerComponent, ProductsViewComponent, ItemViewComponent, CartViewComponent]
})
export class ProductsModule { }
