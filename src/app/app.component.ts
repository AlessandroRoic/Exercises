import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

interface UserData {
  name: {
    first: string;
    last: string;
  };
  picture: {
    medium: string;
  };
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  userData: UserData| null = null;
  private onDestroy$ = new Subject<void>();

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getUserData();
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  private getUserData() {
    this.httpClient
      .get('https://randomuser.me/api/')
      .pipe(
        takeUntil(this.onDestroy$),
        map((data: any) => data['results'][0])
      )
      .subscribe((data) => {
        this.userData = data;
        console.log(data);
      });
  }
}
