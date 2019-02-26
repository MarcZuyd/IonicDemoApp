import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Programma',
      url: '/programma',
      icon: 'calendar'
    },
    {
      title: 'Routes & Info',
      url: '/routes-info',
      icon: 'map'
    },
    {
      title: 'Faciliteiten',
      url: '/faciliteiten',
      icon: 'medkit'
    },
    {
      title: 'Team deelname',
      url: '/team-deelname',
      icon: 'people'
    },
    {
      title: 'FAQ',
      url: '/faq',
      icon: 'help'
    },
    {
      title: 'Organisatie',
      url: '/organisatie',
      icon: 'man'
    },
    {
      title: 'Foto galerij',
      url: '/foto-galerij',
      icon: 'camera'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.hide();
      this.splashScreen.hide();
    });
  }
}
