import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { map } from "rxjs/operators";

@Injectable()

export class CustomerService {
    constructor(private http: Http) { }

    customerDetails(){
       return this.http.get("http://localhost:8081/ipallocatedforcustomer").pipe(
            map(
                (resp) => ( resp.json() )
            )
        )
    }

    // customerDetails() {
    //     return this.http.get("http://localhost:8081/ipallocatedforcustomer").map(
    //         (resp: Response) => resp.json()
    //     )
    // }
}