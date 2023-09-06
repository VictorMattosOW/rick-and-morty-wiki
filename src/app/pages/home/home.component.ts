import { Component, OnInit } from '@angular/core';
import { PersonagensService, Personagens } from '../services/personagens.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  personagens$: Observable<Personagens[]> = new Observable<Personagens[]>();

  constructor(private personagensService: PersonagensService) { }

  ngOnInit(): void {
    this.personagens$ = this.personagensService.getAllCharacters();
  }
}