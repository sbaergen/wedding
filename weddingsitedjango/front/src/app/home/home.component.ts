import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  url : string ='http://localhost:8000/wedding/guest/all/';
  constructor(private http : Http){}

  public getGuests(){
    this.http.get(this.url).toPromise().then((res)=>{console.log(res.json());
  })
  }

  ngOnInit() {
  }

}
