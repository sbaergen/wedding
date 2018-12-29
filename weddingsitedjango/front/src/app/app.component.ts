import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sean and Tiffanie\'s Wedding';
  url : string ='http://seanandtiffanie2019.ca/guest/all/';
  constructor(private http : Http){}
  public getGuests(){
    this.http.get(this.url).toPromise().then((res)=>{console.log(res.json());
    })
  }
}
