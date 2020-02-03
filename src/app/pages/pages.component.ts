import { Component, OnInit } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';
import { NbAuthService, NbAuthJWTToken, NbAuthToken } from '@nebular/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent implements OnInit {
  constructor(private authService: NbAuthService) {
  }

  menu = MENU_ITEMS;

  ngOnInit(): void {
    this.authService.getToken().subscribe((token: NbAuthToken) => {
      console.log(token);
    });
  }
}
