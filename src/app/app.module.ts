import { FooterComponent } from './components/footer/footer.component';
import { InfoComponent } from './components/info/info.component';
import { HotkeyComponent } from './components/hotkey/hotkey.component';
import { ChartComponent } from './components/chart/chart.component';

import { MinimarketComponent } from './components/minimarket/minimarket.component';
import { SliderComponent } from './components/slider/slider.component';
import { ProductsComponent } from './components/products/products.component';
import { BoxComponent } from './components/box/box.component';
import { ManuComponent } from './components/manu/manu.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';

import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './components/product/product.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

const appRouts:Routes = [
  {path:"",component:MainComponent},
  {path:"",component:HeaderComponent},
  {path:"chart",component:ChartComponent},
  {path:"",component:ManuComponent}
  ]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    NavbarComponent,
    ManuComponent,
    BoxComponent,
    ProductsComponent,
    SliderComponent,
    ProductComponent,
    MinimarketComponent,
    ChartComponent,
    HotkeyComponent,
    InfoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRouts),
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
