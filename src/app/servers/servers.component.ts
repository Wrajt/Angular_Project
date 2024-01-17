import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent implements OnInit{
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName ='Testserver'
  serverCreated = false;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  serverID: number = 10;
  serverStatus: string = 'offline';

  getServerStatus() {
    return this.serverStatus;
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }
  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}


