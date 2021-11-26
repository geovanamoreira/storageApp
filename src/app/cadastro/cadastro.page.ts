import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Anime } from '../models/Anime';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  anime: Anime = new Anime();

  constructor(public storage: StorageService, public router: Router) { }

  ngOnInit() {
  }

  salvar() {
    this.storage.set(this.anime.categoria, this.anime);
    this.router.navigateByUrl('/home');
  }

}
