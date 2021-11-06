import { Component, OnInit } from '@angular/core';
import { ExcelService } from '../excel.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  constructor(private excelService:ExcelService) { }
  ngOnInit() { }

  data: any = [{
    eid: 'e101',
    ename: 'ravi',
    esal: 1000
    },{
    eid: 'e102',
    ename: 'ram',
    esal: 2000
    },{
    eid: 'e103',
    ename: 'rajesh',
    esal: 3000
    }];

    exportAsXLSX():void {
      this.excelService.exportAsExcelFile(this.data, 'sample');
   }
}
