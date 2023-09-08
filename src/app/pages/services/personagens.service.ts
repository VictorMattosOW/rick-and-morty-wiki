import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, map } from 'rxjs'

export interface Infos {
  count: number
  next: string
  pages: number
  prev: string | null
}

export interface Personagens {
  created: string
  episode: string[]
  gender: string
  id: number
  image: string
  location: {
    name: string,
    url: string
  }
  name: string
  origin: {
    name: string,
    url: string
  }
  species: string
  status: string
  type: string
  url: string
}

@Injectable({
  providedIn: 'root'
})

export class PersonagensService {

  private readonly url = 'https://rickandmortyapi.com/api/character';

  constructor(private readonly http: HttpClient) { }

  getAllCharacters(nextPage?: string): Observable<{ info: Infos, results: Personagens[] }> {
    let getMoreCharacters = nextPage ? nextPage : this.url;
    return this.http.get<{ info: Infos, results: Personagens[] }>(getMoreCharacters);
  }

}
