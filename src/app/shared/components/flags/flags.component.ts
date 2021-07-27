import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flags',
  templateUrl: './flags.component.html',
  styleUrls: ['./flags.component.scss']
})
export class FlagsComponent implements OnInit {

  @Input() flags:any;
  inputText: string= '';

  constructor() { }

  ngOnInit(): void {
  }

  filterHouses(e: string) {
    this.inputText = e
    console.log(e);
  }
}
