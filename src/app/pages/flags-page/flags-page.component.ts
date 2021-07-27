import { Component, OnInit } from '@angular/core';
import { FlagsService } from 'src/app/shared/services/flags.service';


@Component({
  selector: 'app-flags-page',
  templateUrl: './flags-page.component.html',
  styleUrls: ['./flags-page.component.scss']
})
export class FlagsPageComponent implements OnInit {
  arrayFlags:any[]=[];

  constructor(private FlagsService:FlagsService) { }

  ngOnInit(): void {
    this.FlagsService.getFlags().subscribe((flagsData:any)=>{
      console.log(flagsData);
      this.arrayFlags = flagsData
    })
  }

}
