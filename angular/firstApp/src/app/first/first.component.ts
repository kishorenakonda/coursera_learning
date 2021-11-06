import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
 
  ngOnInit() {
  }

  items = [
    {
      name: 'Kishore',
      chosen: false
    },
    {
      name: 'Kumar',
      chosen: false
    }
  ];

  noneSelected(){
    return !this.items.some(item => item.chosen);
  }
}
