import { Component } from '@angular/core';
import{CatServiceService}from '../cat-service.service'
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent {
  name:string = ""
  lname:string = ""
  email:string = ""
  phone:string = "" 
  address:string = ""
  massage:string = ""
  id : string =""
  constructor(private data1:CatServiceService,private routedata:ActivatedRoute){

  }
  ngOnInit(){
    
    this.id = this.routedata.snapshot.paramMap.get('id')
    console.log(this.id);

  }
  alert() {
    window.alert('Your information has been saved and we will contact you shortly.');
  }
  senduser(){
    // console.log(this.name+this.lname+this.email+this.phone+this.address+this.massage)
    this.data1.createNewUser({
      catid : this.id,
      name:this.name,
      lname:this.lname,
      email:this.email,
      phone:this.phone,
      address:this.address,
      massage:this.massage}).subscribe(data => {
        console.log(data)
     });
  }
}
