import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent  implements OnInit{
  tableHead:string[]=["First Name","Last Name","Gender","Phone","Email"];
  tableRows:string[]=["Ejaz","Ashraf","Male","03418973933","ejazashraf@gmail.com"]
  constructor (private http:HttpClient) {
    
  }
  ngOnInit(): void {
    // this.getdata();
  }
  // getdata(){
  //   this.http.get(`https://client-portal-backend-dev.azurewebsites.net/CandidateFiles`).subscribe((res)=>{
  //     console.log(res);
      
  //   })
    
  // }

}
