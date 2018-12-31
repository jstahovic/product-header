import { Injector, NgModule } from '@angular/core'
import { createCustomElement } from '@angular/elements'
import { BrowserModule } from '@angular/platform-browser'
import { ProductHeaderComponent } from './product-header/product-header.component'

@NgModule({
  declarations: [ProductHeaderComponent],
  imports: [BrowserModule],
  providers: [],
  entryComponents: [ProductHeaderComponent],
})
export class ProductHeaderModule {
  constructor(private injector: Injector) {
    const productHeader = createCustomElement(ProductHeaderComponent, { injector })
    customElements.define('product-header', productHeader)
  }

  ngDoBootstrap() {}
}
