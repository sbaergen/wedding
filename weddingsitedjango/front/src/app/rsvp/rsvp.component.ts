import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css']
})
export class RsvpComponent implements OnInit {
  correct : boolean = false;
  found : boolean = false;
  url : string='http://localhost:8000/wedding/guest/all/';
  constructor(private http : Http) { }

  ngOnInit() {
  }

  checkCode(code): void {
    if (code.value == "ST2019"){
        this.correct = true;
    } else {
        this.correct = false;
    }
  }

  getNames(first, last): void {
    this.url = this.url + "?name=" + first + " " + last;
    this.http.get(this.url).toPromise().then((res)=>{console.log(res.json());
    })
  }

}
