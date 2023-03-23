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
  id = '';
  dataA: IcatStructure[] = [];
  constructor(private datanew: CatServiceService,private routedata:ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.routedata.snapshot.paramMap.get('id')
    console.log(this.id);
    console.log('/'+this.id);
    this.datanew.getCatsData().subscribe((data)=>{
      this.dataA = data
      
    })
  }
}
