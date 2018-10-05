import { Component, OnInit, Input, Output, EventEmitter, OnChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit,DoCheck {

  @Input() modify: boolean = false;
  private stars: boolean[];
  @Input() rating: number = 0;
  @Output() ratingSelect: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  selectStar(star: number) {
    if (this.modify) {
      this.rating = star + 1;
      this.ratingSelect.emit(this.rating);
    }
  }

  ngDoCheck(): void {
    this.stars = [];
    for (let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating);
  }
}
}
