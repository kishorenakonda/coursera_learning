import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { IpusageforallendpointsComponent } from './ipusageforallendpoints/ipusageforallendpoints.component';
import { IpBatchJobsService } from './ip-batch-jobs.service';
import { ExcelService } from './excel.service';
import { IpallocatedforendpointsComponent } from './ipallocatedforendpoints/ipallocatedforendpoints.component';


const myRoutes: Route[] = [
  {
    path: '',
    component: IpusageforallendpointsComponent
  },
  {
    path:'ipallocatedforendpoints/:endpointId',
    component: IpallocatedforendpointsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    IpusageforallendpointsComponent,
    IpallocatedforendpointsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [IpBatchJobsService,ExcelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
