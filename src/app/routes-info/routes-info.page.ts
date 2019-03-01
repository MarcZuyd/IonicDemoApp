import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { GoogleMaps, GoogleMap, GoogleMapOptions, GoogleMapsMapTypeId, Marker } from '@ionic-native/google-maps/ngx';
import { Environment } from '@ionic-native/google-maps';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../components/popover/popover.component';

@Component({
  selector: 'app-routes-info',
  templateUrl: './routes-info.page.html',
  styleUrls: ['./routes-info.page.scss'],
})
export class RoutesInfoPage implements OnInit {

  map: GoogleMap;

  constructor(private platform: Platform, public popoverController: PopoverController) { }

  async ngOnInit() {
    await this.platform.ready();
    await this.loadMap();
  }
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  loadMap() {
    // Only for browser
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyDv5guaQkvW4676AxL8vI8TMoa-8Hggo0k',
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyDv5guaQkvW4676AxL8vI8TMoa-8Hggo0k '
    });
    // Create a map after the view and native platform are ready
    const options: GoogleMapOptions = {
      mapType: GoogleMapsMapTypeId.TERRAIN,

      controls: {
        'compass': true,
        'myLocationButton': true,
        'myLocation': true,   // (blue dot)
        'indoorPicker': true,
        'zoom': true,          // android only
        'mapToolbar': true     // android only
      },

      gestures: {
        scroll: true,
        tilt: true,
        zoom: true,
        rotate: true
      },

      styles: [], // https://developers.google.com/maps/documentation/javascript/style-reference

      camera: {
        target: {lat: 50.8601134, lng: 5.8559722},
        zoom: 10
      },

      preferences: {
        zoom: {
          minZoom: 7,
          maxZoom: 18
        },

        padding: {
          left: 10,
          top: 10,
          bottom: 10,
          right: 10
        },

        building: true
      }
    };

    this.map = GoogleMaps.create('map_canvas', options);
    /*
    const marker: Marker = this.map.addMarkerSync({
      title: 'test',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: 50.8912861,
        lng: 5.9753715
      }
    });

    //marker.showInfoWindow();
    */
  }
}
