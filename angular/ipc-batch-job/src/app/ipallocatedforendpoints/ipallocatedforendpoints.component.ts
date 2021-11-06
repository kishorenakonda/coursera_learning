import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IpBatchJobsService } from '../ip-batch-jobs.service';
import { map } from 'rxjs/operators';
import { ExcelService } from '../excel.service';

@Component({
  selector: 'app-ipallocatedforendpoints',
  templateUrl: './ipallocatedforendpoints.component.html',
  styleUrls: ['./ipallocatedforendpoints.component.css']
})
export class IpallocatedforendpointsComponent implements OnInit {

  id: any;

  constructor(private router: ActivatedRoute, private _ipcBatchJobService: IpBatchJobsService,
    private _excelService: ExcelService) {
    this.id = this.router.snapshot.paramMap.get('endpointId');
  }

  ngOnInit() {
    this.getIpAllocatedForEndpoints();
  }

  ipAllocated: any;
  details: any;
  index: any = 0;
  getIpAllocatedForEndpoints() {
    console.log("my Id", this.id)
    this._ipcBatchJobService.getIPAllocatedForEndpoint(this.id).pipe(
      map(resp => {
        this.ipAllocated = resp;
        console.log("inside map ", this.ipAllocated);
      }
      )).subscribe();
  }

  exportAsXLSX(): void {
    this._excelService.exportAsExcelFile(this.ipAllocated, 'IP_ALLOCATED_FOR_ENDPOINT');
  }
}
