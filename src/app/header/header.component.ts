import { Component, OnInit } from '@angular/core';
import { WsService } from './ws.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private messageCount = 0;

  constructor(private wsServer: WsService) { }

  ngOnInit() {
    this.wsServer.createObservableSocket("ws://localhost:8085").pipe(
      map(event => JSON.parse(event))
    ).subscribe(data => { this.messageCount = data.messageCount; }
    )
  }

}
