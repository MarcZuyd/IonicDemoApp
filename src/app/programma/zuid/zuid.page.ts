import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zuid',
  templateUrl: './zuid.page.html',
  styleUrls: ['../programma.page.scss'],
})
export class ZuidPage implements OnInit {
  races: Race[] = [
    {
      route: 'Blauw',
      afstand: '70 km',
      hoogtemeters: '1035 m',
      starttijd: '8:00 - 11:00'
    },
    {
      route: 'Blauw',
      afstand: '100 km',
      hoogtemeters: '1522 m',
      starttijd: '8:00 - 11:00'
    },
    {
      route: 'Blauw',
      afstand: '130 km',
      hoogtemeters: '1922 m',
      starttijd: '8:00 - 11:00'
    },
    {
      route: 'Geel',
      afstand: '110 km',
      hoogtemeters: '2093 m',
      starttijd: '7:00 - 11:00'
    },
    {
      route: 'Geel',
      afstand: '150 km',
      hoogtemeters: '2749 m',
      starttijd: '7:00 - 11:00'
    },
    {
      route: 'Rood',
      afstand: '140 km',
      hoogtemeters: '2356 m',
      starttijd: '7:00 - 10:00'
    },
    {
      route: 'Rood',
      afstand: '180 km',
      hoogtemeters: '3364 m',
      starttijd: '7:00 - 10:00'
    },
    {
      route: 'Oranje',
      afstand: '215 km',
      hoogtemeters: '4091 m',
      starttijd: '7:00 - 8:00'
    },
    {
      route: 'Oranje',
      afstand: '255 km',
      hoogtemeters: '4747 m',
      starttijd: '7.00 - 8.00'
    }
  ];

  mtb: Race[] = [
    {
      route: 'MTB',
      afstand: '45 km',
      hoogtemeters: '1035 m',
      starttijd: '8:00 - 11:00'
    },
    {
      route: 'MTB',
      afstand: '75 km',
      hoogtemeters: '1035 m',
      starttijd: '8:00 - 11:00'
    },
    {
      route: 'MTB',
      afstand: '105 km',
      hoogtemeters: '1035 m',
      starttijd: '8:00 - 11:00'
    }
  ];

  familie: Familietocht[] = [
    {
      route: 'Familietocht',
      afstand: '25 - 45 km',
      starttijd: '10:00 - 12:00'
    }
  ];

  constructor() { }

  ngOnInit() {
  }


}

class Race {
  route: string;
  afstand: string;
  hoogtemeters: string;
  starttijd: string;
}

class Familietocht {
  route: string;
  afstand: string;
  starttijd: string;
}
