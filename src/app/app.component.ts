import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PawsService } from './paws.service';
import { Diary } from './proto/paws_grpc_pb';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Paws';
  diaries$: Observable<any>;

  constructor(private pawsService: PawsService) {
  }

  ngOnInit(): void {
    this.diaries$ = this.pawsService.getDiaries();
  }
}
