import { Component, OnInit } from '@angular/core';

import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-foto-galerij',
  templateUrl: './foto-galerij.page.html',
  styleUrls: ['./foto-galerij.page.scss'],
})
export class FotoGalerijPage implements OnInit {
  currentImage: any;

  constructor(public photoService: PhotoService) {  }

  ngOnInit() {
    this.photoService.loadSaved();
  }

}
