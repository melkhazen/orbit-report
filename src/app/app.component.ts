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
  listOfTypes: string[]
  searchLength: number[];

  constructor() {
    this.sourceList = [];
    let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json'; 
    this.displayList = this.sourceList;
    this.listOfTypes = ['Space Debris', 'Communication', 'Probe', 'Positioning', 'Space Station', 'Telescope']
    this.searchLength = [0,0,0,0,0,0];

    window.fetch(satellitesUrl).then(function(response) {
       response.json().then(function(data) {
 
          let fetchedSatellites = data.satellites;
          // TODO: loop over satellites
          for (let i = 0; i < data.satellites.length; i++){
            this.sourceList.push(new Satellite (data.satellites[i].name, data.satellites[i].type, data.satellites[i].launchDate, data.satellites[i].orbitType, data.satellites[i].operational));
          }
          // TODO: create a Satellite object using new Satellite(fetchedSatellites[i].name, fetchedSatellites[i].type, fetchedSatellites[i].launchDate, fetchedSatellites[i].orbitType, fetchedSatellites[i].operational);
          // TODO: add the new Satellite object to sourceList using: this.sourceList.push(satellite);
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

returnSearchLength(): void{
  for (let i = 0; i < this.listOfTypes.length; i++){
   let target = (this.sourceList[i].type)
   if( target === this.listOfTypes[i]){
      this.searchLength[i] += 1
   }

   // another attempt using the search function:
   // this.search(this.listOfTypes[i])
   // this.searchLength[i] = this.displayList.length

   }
  }



}
