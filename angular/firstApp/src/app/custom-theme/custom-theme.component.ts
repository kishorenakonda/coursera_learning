import { Component, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { elementStyleProp } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-custom-theme',
  templateUrl: './custom-theme.component.html',
  styleUrls: ['./custom-theme.component.scss']
})
export class CustomThemeComponent implements OnInit {

  otherTheme: Boolean = true;
  constructor(private overlay: OverlayContainer) { }

  ngOnInit() {
    this.customJson();
  }

  toggleTheme() {
    console.log("clicked");
    this.otherTheme = !this.otherTheme;
  }


  toggleThemeClass() {
    if (this.otherTheme) {
      return "custom body";
    }
    else {
      return "alternative";
    }
  }

  customJson() {
    var validjson = {
      "resourcegroupName": "sample",
      "vmName": "sampleVM2",
      "subscriptionId": "3868DAB5-A9F0-4868-8BF7-619015C15188",
      "Domain": "tatacommunicationsapitest.onmicrosoft.com",
      "Web Application ID": "aeeb0d68-0a34-4a04-80e2-1720ec88bcb6",
      "Web Application Secret": "XBB6E40aTOV2pcBpDCedoEGU4bQv+F+SVE26CclccEM="
    }

    // console.log(validjson);

    var stringJson = JSON.stringify(validjson);
    var parsedjson = JSON.parse(stringJson);
    // console.log(parsedjson);

    // var invalidjson = [
    //     \\\"3868DAB5-A9F0-4868-8BF7-619015C15188\\\",
    //     \\\"efe8a7ee-62a5-44db-982b-9fae4fc2d875\\\",
    //     \\\"shwethas--#123#--SkyBlue\\\"
    //   ]

    var invalidjson = {
      "msg": {
        "method": "deleteInstance",
        "clazz": "compute",
        "params": ["3868DAB5-A9F0-4868-8BF7-619015C15188", "efe8a7ee-62a5-44db-982b-9fae4fc2d875", "shwethas--#123#--SkyBlue"]
      },
      "auditID": "TGT-8229-22-Jan-2019 14:50:02",
      "queue": "387ccda3-f8a3-48ff-b469-ba729a5ad688"
    }
    console.log("invalid json");
    console.log(invalidjson);

    try {
      console.log("inside try");
      var invalidparsedjson = JSON.parse(invalidjson.toString());
      console.log(invalidparsedjson);
    } catch (e) {
      console.log("inside catch");
      console.log(e);
    }

    console.log(invalidparsedjson);

    //     {"msg":{"method":"deleteInstance",
    // "params":["{\"resourcegroupName\":\"sample\",
    // \"vmName\":\"sampleVM2\",\"subscriptionId\":
    // \"3868DAB5-A9F0-4868-8BF7-619015C15188\",
    // \"Domain\":\"tatacommunicationsapitest.onmicrosoft.com\",
    // \"Web Application ID\":\"aeeb0d68-0a34-
    // 4a04-80e2-1720ec88bcb6\",
    // \"Web Application Secret\":
    // \"XBB6E40aTOV2pcBpDCedoEGU4bQv+F+SVE26CclccEM=\"}"],
    // "clazz":"compute"},
    // "auditID":"TGT-8781-28-Jan-2019 10:25:24",
    // "queue":"4158caf0-534c-454d-923d-4214a781823b"}

    var deleteJson =
    {
      "msg": {
        "method": "deleteInstance",
        "params": [
          {
            "resourcegroupName": "sample",
            "vmName": "sampleVM2",
            "subscriptionId": "3868DAB5-A9F0-4868-8BF7-619015C15188",
            "Web Application Secret": "XBB6E40aTOV2pcBpDCedoEGU4bQv+F+SVE26CclccEM="
          }
        ],
        "clazz": "compute"
      },
      "auditID": "TGT-8781-28-Jan-2019 10:25:24",
      "queue": "4158caf0-534c-454d-923d-4214a781823b"
    }
    console.log(deleteJson);
  }


}
