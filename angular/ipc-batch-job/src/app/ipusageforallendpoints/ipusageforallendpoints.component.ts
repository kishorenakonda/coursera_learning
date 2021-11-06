import { Component, OnInit } from '@angular/core';
import { IpBatchJobsService } from '../ip-batch-jobs.service';
import { map } from 'rxjs/operators';
import { ExcelService } from '../excel.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-ipusageforallendpoints',
  templateUrl: './ipusageforallendpoints.component.html',
  styleUrls: ['./ipusageforallendpoints.component.css']
})
export class IpusageforallendpointsComponent implements OnInit {

  constructor(private _ipcBatchJobsService: IpBatchJobsService,
    private _excelService: ExcelService, private router: Router) { }

  ngOnInit() {
    this.getIPUsage()
  }
  
  ipUsageDetails: any;
  excelObject: any = [];

  getIPUsage() {
    this._ipcBatchJobsService.getIPUsageForAllEndpoints().pipe(
      map(resp => {
        this.ipUsageDetails = resp;
        // console.log(this.ipUsageDetails);
      }
      )).subscribe();
  }

  exportAsXLSX(): void {
    this._excelService.exportAsExcelFile(this.ipUsageDetails, 'PUBLIC_IP_USAGE');
  }

  getIpAllocatedDetails(endpointId) {
    //console.log(endpointId)
    this.router.navigate(['/ipallocatedforendpoints', endpointId])
  }
}
