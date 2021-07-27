import { Component, Input, OnInit} from '@angular/core';
import { CharactersService } from 'src/app/shared/services/characters.service';


@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.scss']
})
export class CharactersPageComponent implements OnInit {

  characters: any[] = [];
  textInput: any;

  constructor(private CharactersService: CharactersService) { }

  ngOnInit(): void {
    this.CharactersService.getCharacters().subscribe((charactersData: any) => {
      this.characters = charactersData;
    })
  } 
}