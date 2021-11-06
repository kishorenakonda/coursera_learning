import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {

  details = [];
  mysubmenus = [];
  expand: boolean = false; 
  constructor() { }

  ngOnInit() {
    this.details = [
      {
        "status": "Success",
        "data": [
          {
            "icon": "",
            "label": "sigs",
            "url": "",
            "menu": [
              {
                "icon": "",
                "label": "menu-1 sigs",
                "url": ""
              },
              {
                "icon": "",
                "label": "menu-2 sigs",
                "url": ""
              }
            ]
          },
          {
            "icon": "",
            "label": "Ddos",
            "url": "",
            "menu": [
              {
                "icon": "",
                "label": "menu-1 Ddos",
                "url": ""
              },
              {
                "icon": "",
                "label": "menu-2 Ddos",
                "url": ""
              }
            ]
          },
          {
            "icon": "",
            "label": "Patch Management",
            "url": "",
            "menu": [
              {
                "icon": "",
                "label": "menu-1 Patch",
                "url": ""
              },
              {
                "icon": "",
                "label": "menu-2 Patch",
                "url": ""
              }
            ]
          }
        ]
      },
      {
        "status": "Success",
        "data": ""
      }
    ]
  }
  showMenu: boolean;
  opensubmenu(index) {
    this.mysubmenus = this.details[0].data[index].menu;
    console.log(this.mysubmenus);
    this.showMenu = !this.showMenu;
    // return index;
  }

  onclick(){
    this.expand = !this.expand;
  }
}


