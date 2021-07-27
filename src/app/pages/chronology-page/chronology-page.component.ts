import { CharactersService } from 'src/app/shared/services/characters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chronology-page',
  templateUrl: './chronology-page.component.html',
  styleUrls: ['./chronology-page.component.scss']
})
export class ChronologyPageComponent implements OnInit {

  list: any;
  listSorted: any[] = []
  switcher: boolean = false;
  sortValue: any;
  arrowClass: string = 'arrow';

  constructor(private characters: CharactersService) { }

  ngOnInit(): void {
    this.characters.getCharacters().subscribe(((charactersData) => {
      this.list = charactersData;
      for (const character of this.list) {
        if (character.age !== null && character.age.age !== undefined) {
          this.listSorted.push(character);
        }
      }
      this.toogleSort();
    }))
  }
  // sortAscend() {
  //   return this.listSorted.sort((a, b) => (a.age.age > b.age.age) ? 1 : ((b.age.age > a.age.age) ? -1 : 0))
  // }
  toogleSort() {

    if (this.switcher === false) {
      this.listSorted.sort((a, b) =>
        (a.age.age > b.age.age) ? -1 * (-1) : ((b.age.age > a.age.age)
          ? 1 * (-1) : 0));
      this.arrowClass = 'arrow--ascend';
      this.switcher = true;
    } else {

      this.listSorted.sort((a, b) =>
        (a.age.age > b.age.age) ? -1 : ((b.age.age > a.age.age)
          ? -1 : 0));
      this.arrowClass = 'arrow--descend';
      this.switcher = false;
    }
    this.sortValue = this.listSorted[0].age.age
  }
}
