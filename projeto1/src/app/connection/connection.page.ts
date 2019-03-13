import { Component } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';

@Component({
  selector: 'app-connection',
  templateUrl: 'connection.page.html',
  styleUrls: ['connection.page.scss'],
})
export class ConnectionPage {
  constructor(private network: Network) { }

  ngOnInit() {
    console.log(this.network.type);
  }
}
