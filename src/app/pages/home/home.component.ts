import { Component } from '@angular/core'

const card = { 
  "id": 43, 
  "name": 
  "Big Morty", 
  "status": "Dead", 
  "species": "Human", 
  "type": "", 
  "gender": "Male", 
  "origin": { "name": "unknown", "url": "" }, 
  "location": { "name": "Citadel of Ricks", 
  "url": "https://rickandmortyapi.com/api/location/3" }, 
  "image": "https://rickandmortyapi.com/api/character/avatar/43.jpeg", 
  "episode": ["https://rickandmortyapi.com/api/episode/28"], 
  "url": "https://rickandmortyapi.com/api/character/43", 
  "created": "2017-11-05T10:17:04.997Z" 
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  card = { 
    id: 43, 
    name: "Big Morty", 
    status: "Dead", 
    species: "Human", 
    type: "", 
    gender: "Male", 
    origin: { name: "unknown", "url": "" }, 
    location: { name: "Citadel of Ricks", url: "https://rickandmortyapi.com/api/location/3" }, 
    image: "https://rickandmortyapi.com/api/character/avatar/43.jpeg", 
    episode: ["https://rickandmortyapi.com/api/episode/28"], 
    url: "https://rickandmortyapi.com/api/character/43", 
    created: "2017-11-05T10:17:04.997Z" 
  }

}