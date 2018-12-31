import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component';
import { ProductHeaderComponent } from './product-header/product-header.component'

@NgModule({
  declarations: [AppComponent, ProductHeaderComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
