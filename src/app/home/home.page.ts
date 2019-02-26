import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  newsItems: NewsItem[] = [
    {
      title: 'LET OP! Vanaf 1 maart daalt de vroegboekkorting.',
      // tslint:disable-next-line:max-line-length
      text: 'Heb jij je nog niet ingeschreven voor één van de toertochten op zaterdag 15 juni 2019? Of wil jij op zondag 16 juni mee rennen met één van de afstanden…',
      url: '2019/nieuws/let-op-vanaf-1-maart-daalt-de-vroegboekkorting/',
      imgUrl: '2019/01/combi-run-fiets-800x400.jpg'
    },
    {
      title: 'Harry Driessen 1ste ambassadeur van de Obvion Run!',
      // tslint:disable-next-line:max-line-length
      text: 'Twee jaar geleden begon het bij de organisatie te kriebelen. Wij werden gevraagd of wij naast de toertochten ook een hardloop evenement wilde organiseren. Organiseren zit ons in het bloed,…',
      url: '2019/nieuws/harry-driessen-1ste-ambassadeur-van-de-obvion-run/',
      imgUrl: '2019/02/harry-driessen-ambassadeur-obvion-run-897x448.jpg'
    },
    {
      title: 'De volledige Camerig!',
      // tslint:disable-next-line:max-line-length
      text: 'Ieder jaar zit er wel een deel van de klim “De Camerig” in de route van toertochten, maar nog nooit de volledige 4,6 km lang. Dit jaar beklimmen de deelnemers…',
      url: 'de-volledige-camerig/',
      imgUrl: '2019/02/Camerig-Vaals-2048x1024.jpg'
    },
    {
      title: 'Nieuwjaarsbijeenkomst supportgroepen en verenigingen',
      url: 'nieuwjaarsbijeenkomst-supportgroepen-en-verenigingen/',
      // tslint:disable-next-line:max-line-length
      text: 'Ieder jaar organiseert Hago Limburgs Mooiste een gezellige nieuwjaarsbijeenkomst voor alle supportgroepen en verenigingen die keihard meewerken tijdens het evenement. Ook dit jaar was er weer een grote opkomst. Wist…',
      imgUrl: '2019/02/2015-wilbert-met-sinasappels-1200x600.jpg'
    },
    {
      title: 'Teaminschrijvingen voor de RUN',
      // tslint:disable-next-line:max-line-length
      text: 'Ga samen met je vrienden, relaties, collega’s een sportieve uitdaging aan en geniet van een onvergetelijke dag! Een (bedrijven)team bestaat uit minimaal 5 personen. Samen geniet je van een aantal…',
      url: 'teaminschrijvingen-voor-de-run/',
      imgUrl: '2019/02/Team007-1200x600.jpg'
    },
    {
      title: 'De nieuwe wielerkleding is binnen!',
      // tslint:disable-next-line:max-line-length
      text: 'Veel eerder dan verwacht, maar de nieuwe wielerkleding van 2019 is al binnen. Heb jij kleding besteld via onze webshop of direct via het inschrijfformulier, dan mag jij dit weekend…',
      url: 'de-nieuwe-wielerkleding-is-binnen/',
      imgUrl: '2018/12/PRJ18-009096_3D-Prof-Jacket-Men_lowres_00001-600x300.jpg'
    },
    {
      title: 'In Heerlen vanaf dit weekend: tentoonstelling Basquiat',
      // tslint:disable-next-line:max-line-length
      text: 'Er is in Heerlen veel meer te doen dan de start & finish van Hago Limburgs Mooiste. In SCHUNCK* opent dit weekend de tentoonstelling Basquiat: the Artist and his New York scene...',
      url: 'in-heerlen-vanaf-dit-weekend-tentoonstelling-basquiat/',
      imgUrl: '2019/02/2017-welkom-kl-1200x600.jpg'
    },
  ];
}

class NewsItem {
  title: string;
  text: string;
  url: string;
  imgUrl: string;
}
