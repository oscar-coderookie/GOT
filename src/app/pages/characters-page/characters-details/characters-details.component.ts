import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/shared/services/characters.service';
import { FlagsService } from 'src/app/shared/services/flags.service';

@Component({
  selector: 'app-characters-details',
  templateUrl: './characters-details.component.html',
  styleUrls: ['./characters-details.component.scss']
})
export class CharactersDetailsComponent implements OnInit {

  character: any;
  flag: any;

  constructor(private route: ActivatedRoute, private charactersService: CharactersService, private flagsService: FlagsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=> {
      const nameCharacter= params.get("nameCharacter");

      this.charactersService.getCharacter(nameCharacter).subscribe((characterData)=>{
        this.character= characterData;
        this.flagsService.getFlag(this.character.house).subscribe((flagData)=>{
          this.flag= flagData;
        })
      })
    })
  }

}
