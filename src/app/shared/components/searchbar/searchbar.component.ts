import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

  inputText: any = '';
  @Output() searchEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  searchEmit(textToSearch: string){
    this.searchEmitter.emit(textToSearch);
  }

}
