import { Component } from '@angular/core';
import { QGSdkPlugin } from 'aiqua-qgsdk'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {

    // -- sts --
    console.log('This is Tab1Page constructor');
    let v = QGSdkPlugin.echo({value:'1'});
    for (var key in v) {
      console.log("User " + v[key] + " is #" + key);
      if (typeof v[key] === 'object') {
        console.log('return value:', v[key].value);
      }
    }
    // -- end --

  }

}
