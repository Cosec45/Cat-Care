import { Component } from '@angular/core';
import { CatServiceService } from '../../app/cat-service.service';
import { IcatStructure } from '../../assets/data/catStructure';

@Component({
  selector: 'app-cat-page',
  templateUrl: './cat-page.component.html',
  styleUrls: ['./cat-page.component.css']
})
export class CatPageComponent {
  dataA: IcatStructure[] = [];
  constructor(private datanew: CatServiceService) {}
  ngOnInit(): void {
    this.datanew.getCatsData().subscribe((data)=>{
      this.dataA = data
      
    })
    setTimeout(() => console.log(this.dataA), 1000);
  }
}
