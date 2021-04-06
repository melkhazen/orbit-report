import { Component,Input, OnInit } from '@angular/core';
import { Satellite } from '../satellite';
import { AppComponent} from '../app.component'

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];
  @Input() appComponent: AppComponent[];
  
  constructor() { }
  ngOnInit() {
  }

  countType(array: Satellite[], type: string){
    let countHolder = 0;
    for (let i = 0; i < array.length; i++){
      if (array[i].type === type){
        countHolder += 1
      }
    }
    return countHolder
  }

}
