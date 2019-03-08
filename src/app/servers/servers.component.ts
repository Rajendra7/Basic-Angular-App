import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
 // selector: '[app-servers]',
 //selector: '.app-servers',
  templateUrl: './servers.component.html',
  
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowsNewServer=false;
  serverCreateStatus= 'server was not created';
  serverName='ServerName';
  serverCreated=false;
  servers = ['server', 'server 2']

  constructor() { 
    setTimeout(() => {
      this.allowsNewServer=true;
    },2000)
  }

  ngOnInit() {
  }

  onServerCreate(){
    this.serverCreated=true;
    this.servers.push(this.serverName)
      this.serverCreateStatus='Server was Created ! Name is '+ this.serverName;
  }
  onUpdateServerName(event:Event) {
    this.serverName= (<HTMLInputElement>event.target).value;
  }

}
