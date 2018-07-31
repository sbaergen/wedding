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
  guests : Object = "";
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
    var rsvp : number = 0;
    if (first == "" || last == ""){
        alert("Both first and last name are required");
        return;
    }
    var url1 : string = this.url + "?name=" + first + " " + last;
    this.http.get(url1).toPromise().then((res)=>{
        return res.json()[0];
    }).then((res)=>{
        console.log(res.rsvp);
        var rsvp : number = res.rsvp;
        var url2 : string = this.url + "?rsvp=" + rsvp;
        this.http.get(url2).toPromise().then((resp)=>{
            this.guests = resp.json();
        })
    })
  }
}
