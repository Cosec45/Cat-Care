import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatServiceService } from '../../app/cat-service.service';
import { IcatStructure } from '../../assets/data/catStructure';


@Component({
  selector: 'app-adopt-cat',
  templateUrl: './adopt-cat.component.html',
  styleUrls: ['./adopt-cat.component.css']
})
export class AdoptCatComponent {
  dataA: IcatStructure[] = [];
  constructor(private datanew: CatServiceService) {}
  ngOnInit(): void {
    this.datanew.getCatsData().subscribe((data)=>{
      this.dataA = data
      
    })
    setTimeout(() => console.log(this.dataA), 1000);
  }
}
