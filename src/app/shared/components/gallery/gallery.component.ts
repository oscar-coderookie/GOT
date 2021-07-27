import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  @Input() list: any;
  inputText: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  filterCharacters(e: string) {
    this.inputText = e
    console.log(e);
  }
}
