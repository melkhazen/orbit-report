import { Component } from '@angular/core';
import { Satellite } from './satellite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orbit-report';
  sourceList: Satellite[];
  displayList: Satellite[];

  constructor() {
    this.sourceList = [];
    let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json'; 
    this.displayList = this.sourceList;

    window.fetch(satellitesUrl).then(function(response) {
       response.json().then(function(data) {
 
          let fetchedSatellites = data.satellites;
          for (let i = 0; i < data.satellites.length; i++){
            this.sourceList.push(new Satellite (data.satellites[i].name, data.satellites[i].type, data.satellites[i].launchDate, data.satellites[i].orbitType, data.satellites[i].operational));
          }
       }.bind(this));
    }.bind(this));
 }

 search(searchTerm: string): void {
  let matchingSatellites: Satellite[] = [];
  searchTerm = searchTerm.toLowerCase();
  for(let i=0; i < this.sourceList.length; i++) {
     let name = (this.sourceList[i].type.toLowerCase());
     if (name.indexOf(searchTerm) >= 0) {
        matchingSatellites.push(this.sourceList[i]);
     }
  }
  this.displayList = matchingSatellites;
  
 }

}
