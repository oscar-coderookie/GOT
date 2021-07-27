import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  
  home: boolean = true;
  displayNone: string = 'string="display:none"'
  display: string = '';
  
  constructor() { }

  ngOnInit(): void {
    if (window.location.pathname !== '/'){
      this.home = false;
    }
  }
}
