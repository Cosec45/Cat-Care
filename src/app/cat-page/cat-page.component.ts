import { Component } from '@angular/core';
import { CatServiceService } from '../../app/cat-service.service';
import { IcatStructure } from '../../assets/data/catStructure';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cat-page',
  templateUrl: './cat-page.component.html',
  styleUrls: ['./cat-page.component.css']
})
export class CatPageComponent {
  dataA: IcatStructure[] = [];
  constructor(private datanew: CatServiceService,private routing:Router) {}
  ngOnInit(): void {
    this.datanew.getCatsData().subscribe((data)=>{
      console.log(data)
      this.dataA = data.filter(acat=>acat.adopt_user=="-1")
      
      console.log(this.dataA)
    })
    
  }
}
