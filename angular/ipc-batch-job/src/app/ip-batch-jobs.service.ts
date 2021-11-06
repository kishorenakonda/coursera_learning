import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IpBatchJobsService {

  constructor(private http: Http) { }

  localhostUrl = "http://localhost:8081/ipcbatchjobs/";
  // productionUrl = "https://ipcloud.tatacommunications.com"


  getIPUsageForAllEndpoints() {
    // this.productionUrl
    return this.http.get(this.localhostUrl + "ipusageforallendpoints").pipe(
      map(resp => resp.json())
    )
  }

  getIPAllocatedForEndpoint(id) {
    return this.http.get(this.localhostUrl + "ipallocatedforcustomer/" + id).pipe(
      map(resp => resp.json())
    )
  }
}
