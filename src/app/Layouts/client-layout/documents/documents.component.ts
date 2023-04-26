import { Component } from '@angular/core';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent {

  tableHead:string[]=["First Name","Last Name","Gender","Phone","Email"];
  tableRows:string[]=["Ejaz","Ashraf","Male","03418973933","ejazashraf@gmail.com"]

}
