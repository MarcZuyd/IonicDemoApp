import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { PopoverComponent } from './components/popover/popover.component';
import { AppRoutingModule } from './app-routing.module';

import { Camera } from '@ionic-native/camera/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { GoogleMaps } from '@ionic-native/google-maps';
import { PopoverController } from '@ionic/angular';

@NgModule({
  declarations: [AppComponent, PopoverComponent],
  entryComponents: [PopoverComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    GoogleMaps,
    PopoverController,
    PopoverComponent,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
