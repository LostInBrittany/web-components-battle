import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/mergeMap';

import { PeopleService } from '../../shared/services/people.service';

@Component({
  selector: 'pwc-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  people = [];
  currentId="";
  currentPerson={};

  constructor(
    private routes: ActivatedRoute,
    private service: PeopleService
  ) { }

  ngOnInit() {
  this.loadDatas();
  }

  ngAfterViewInit(){
    
  }

  loadDatas() {
    this.routes.params
    .map((params:any) => {    
      this.currentId=params.id;
      return params.id
    })
    .flatMap(id=>this.service.fetch())
    .subscribe((peoples:any) => {
        this.people = peoples;
        if(this.currentId){
          let p=this.people.filter((p)=>p.id===this.currentId);
          this.currentPerson=p[0];    
        }
      }
    );      
  }
}
