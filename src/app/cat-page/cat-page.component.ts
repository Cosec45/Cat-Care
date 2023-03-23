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
      this.dataA = data
      
    })
    setTimeout(() => console.log(this.dataA), 1000);
  }
  openDetail(cat){
    this.routing.navigate(['/catdetail',cat.id])}
}
