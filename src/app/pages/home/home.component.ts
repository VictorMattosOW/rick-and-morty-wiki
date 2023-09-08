import { Component, OnInit } from '@angular/core';
import { PersonagensService, Personagens, Infos } from '../services/personagens.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  characters: Personagens[] = [];
  infos: Infos = {} as Infos;
  maxNumberOfCharacters = 826;

  constructor(private personagensService: PersonagensService) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.personagensService.getAllCharacters(this.infos.next).subscribe({
      next: (result) => {
        const { results, info } = result;
        this.characters.push(...results);
        this.infos = info;
      }
    })
  }
}