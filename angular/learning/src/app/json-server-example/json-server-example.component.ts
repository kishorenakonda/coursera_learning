import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-json-server-example',
  templateUrl: './json-server-example.component.html',
  styleUrls: ['./json-server-example.component.css']
})
export class JsonServerExampleComponent implements OnInit {

  constructor(private dataService: DataService) { }

  myData : {};

  ngOnInit() {
    this.dataService.getJson().subscribe(resp => this.myData = resp);
    console.log(this.myData);

    var myObj = {
      "name" : "kishore",
      "age":"21"
    };

    var myArray = [];
    
    myArray.push(myObj);
    console.log(myArray);
  }

}
