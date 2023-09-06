import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() image = ''
  @Input() name = ''
  @Input() status = ''
  @Input() species = ''
  @Input() gender = ''
  @Input() originName = ''
  @Input() locationName = ''

}
