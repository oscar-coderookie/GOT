import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-btn',
  templateUrl: './back-btn.component.html',
  styleUrls: ['./back-btn.component.scss']
})
export class BackBtnComponent implements OnInit {

  btnBackLink:any;
  
  constructor() { }

  ngOnInit(): void {
    console.log(window.location.href);
    if (window.location.href.toLowerCase().includes('characters')) {
      this.btnBackLink = "/characters"
    } else if (window.location.href.toLowerCase().includes('flags')) {
      this.btnBackLink = "/flags"
    }
    console.log(this.btnBackLink);
  }
}
