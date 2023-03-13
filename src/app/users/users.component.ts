import { Component } from '@angular/core';
import { UsersdataServiceService } from '../../app/usersdata-service.service';
import { Iusersstructure } from '../../assets/data/usersstructure';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  dataA: Iusersstructure[] = [];
  constructor(private datanew: UsersdataServiceService) {}
  ngOnInit(): void {
    this.datanew.getProducts().subscribe((data)=>{
      this.dataA = data
      
    })
    setTimeout(() => console.log(this.dataA), 1000);
  }
}
