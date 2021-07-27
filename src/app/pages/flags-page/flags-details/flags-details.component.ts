import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlagsService } from 'src/app/shared/services/flags.service';

@Component({
  selector: 'app-flags-details',
  templateUrl: './flags-details.component.html',
  styleUrls: ['./flags-details.component.scss']
})
export class FlagsDetailsComponent implements OnInit {

  flag: any;

  constructor(private route: ActivatedRoute, private flagsService: FlagsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=> {
      const nameFlag= params.get("nameFlag");
      console.log(nameFlag);

      this.flagsService.getFlag(nameFlag).subscribe((flagData)=>{
        console.log(flagData);
        this.flag= flagData
      })
      
    })
  }
}
