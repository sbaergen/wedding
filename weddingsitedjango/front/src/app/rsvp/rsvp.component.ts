import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { FormControl, Validators } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css']
})
export class RsvpComponent implements OnInit {
  loggedin : boolean = false;
  incorrect : boolean = false;
  found : boolean = false;
  plusone : boolean = false;
  guests = [];
  restrictions = [];
  plusFirst;
  plusLast;
  code;
  plusOneRadio;
  radio = [];
  extra = [];
  game = [];
  tea = [];
  host = 'http://django-env.juxsripmvg.ca-central-1.elasticbeanstalk.com'
  // host = 'http://localhost:8000'
  url : string=this.host + '/wedding/guestsapi/';
  dieturl : string=this.host + '/wedding/dietaryapi/';
  contributionUrl = this.host + '/'
  headers = new Headers({
    'Content-Type': 'application/json',
    'X-CSRFToken': this.getCookie('csrftoken')
  });
  constructor(private http : Http, public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
  }

/** from https://stackoverflow.com/questions/43248131/csrf-token-missing-or-incorrect-in-angular-2-django-1-10-6 **/
  getCookie(name) {
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length == 2)
      return parts.pop().split(";").shift();
  }


  checkCode(): void {
    if (this.code.toUpperCase() == "ST2019"){
        this.loggedin = true;
        this.incorrect = false;
    } else {
        this.loggedin = false;
        this.incorrect = true;
        this.code = "";
    }
  }

  getDiet(guestid, index): Object {
    return this.http.get(this.dieturl + "?guest=" + guestid).toPromise().then((res)=>{
        this.restrictions[index] = [];
        for (let r of res.json()) {
            if (!['gluten', 'dairy', 'vegetarian', 'vegan'].includes(r.restriction)){
                this.restrictions[index].push("other");
                this.extra[index] = r.restriction;
            } else {
                this.restrictions[index].push(r.restriction)
            }
        }
        if (this.restrictions[index].length == 0){
            this.restrictions[index].push('none');
        }

    });
  }
  getNames(first, last): void {
    var rsvp : number = 0;
    var url1 : string = this.url + "?name=" + first + " " + last;
    this.http.get(url1).toPromise().then((res)=>{
        return res.json()[0];
    }).then((res)=>{
        if (!res){
          this.incorrect = true;
          return
        }
        else {
          this.incorrect = false;
        }
        var rsvp : number = res.rsvp;
        var url2 : string = this.url + "?rsvp=" + rsvp;
        this.http.get(url2).toPromise().then((resp)=>{
            this.guests = resp.json();
            this.plusOneRadio = "false";
            for (let g in this.guests){
                if (this.guests[g].plusone){
                    this.plusone = true;
                }
                if (this.guests[g].added){
                    this.plusOneRadio = "true";
                    this.plusFirst = this.guests[g].name.split(" ")[0];
                    this.plusLast = this.guests[g].name.slice(this.plusFirst.length+1);
                    this.getDiet(this.guests[g].guestid, 'a');
                    this.tea['a'] = this.guests[g].tea;
                    this.game['a'] = this.guests[g].game;

                } else {
                    if (this.guests[g].response == undefined){
                        this.plusOneRadio = "";
                    }
                    this.radio[g] = this.guests[g].response + "";
                    this.getDiet(this.guests[g].guestid, g);
                    this.tea[g] = this.guests[g].tea;
                    this.game[g] = this.guests[g].game;
                }
            }
        })
    })
  }

  deselect(values, i): void {
    if(values[0] == "none"){
        this.restrictions[i] = ["none"]
    }
  }

  removeNone(values, i): void {
    if(values[0] == "none"){
        this.restrictions[i] = values.slice(1);
    }
  }

  needOther(i): boolean {
    if(this.restrictions[i] && this.restrictions[i].includes("other")){
        return true;
    }
    else{
        return false;
    }
  }

  submitInfo(): void {
    for (let i in this.guests) {
        this.updateResponse(i)
    }
    if (this.plusone) {
        this.addPlusOne()
    }
    const dialogRef = this.dialog.open(DoneDialog, {
        width: '350px'
    });
    dialogRef.afterClosed().subscribe(result => {
        if (result.email){
          var email = {};
          var body = "<p>Your RSVP details for Sean and Tiffanie's wedding on June 15, 2019 are below (To change anything just return to <a href=http://seanandtiffanie2019.ca/rsvp>the rsvp page</a> and make any necessary changes):</p><hr>"
          for (let g in this.guests){
            if (this.guests[g].added && this.plusOneRadio == 'false'){
              continue;
            }
            body = body + "<p><strong>" + this.guests[g].name + "</strong></p><p> Response: ";
            if (!this.guests[g].added){
              var attend = (this.radio[g] == 'true') ? "Yes" : "No";
              body = body + attend;
              if (this.radio[g] == 'true'){
                body = body + "</p><p>Dietary Restrictions: "
                var needExtra = false;
                for (let r of this.restrictions[g]){
                  if (r=="other"){
                    needExtra = true;
                  } else {
                    body = body + r + ", ";
                  }
                }
                if (needExtra){
                  body = body + this.extra[g];
                } else {
                  body = body.slice(0,-2)
                }
                body = body + "</p><p>Game Suggestion: " + this.game[g];
                body = body + "</p><p>Tea Suggestion: " + this.tea[g];
              }
            }
            else {
              body = body + "Yes";
              body = body + "</p><p>Dietary Restrictions: ";
              var needExtra = false;
              for (let r of this.restrictions['a']){
                if (r=="other"){
                  needExtra = true;
                } else {
                  body = body + r + ", ";
                }
              }
              if (needExtra){
                body = body + this.extra['a'];
              } else {
                body = body.slice(0,-2)
              }
              body = body + "</p><p>Game Suggestion: " + this.game['a'];
              body = body + "</p><p>Tea Suggestion: " + this.tea['a'];
            }
            body = body + "</p><hr>"
          }
          if (this.plusone && this.plusOneRadio == 'false'){
              body = body + "<p>No Plus One</p>"
            }
          email["toEmail"]=result.email;
          email["message"]=body;
          email["subject"]="Your RSVP Details"
          this.http.post(this.contributionUrl + "email/", JSON.stringify(email),new RequestOptions({headers: this.headers})).toPromise().then((res)=>{
          });
        }
        // this.router.navigateByUrl('/home');
    });
  }

  updateResponse(i): void {
    if (this.guests[i].added){
        return;
    }
    var guest = this.guests[i];
    var id = guest.guestid;
    var other = this.extra[i];
    var restrictions = this.restrictions[i];
    var rsvp = this.radio[i];
    if (rsvp == "false"){
        restrictions = {};
    }
    this.http.delete(this.dieturl + "?guest=" + id, new RequestOptions({headers: this.headers})).toPromise().then((res)=>{
        for (let r of restrictions){
            if (r == 'none'){
                break;
            }
            var dietBody = {}
            if (r == 'other'){
                dietBody["restriction"] = other;
            } else {
                dietBody["restriction"] = r;
            }
            dietBody["guest_id"] = id
            var dietRequest = this.http.post(this.dieturl, dietBody, new RequestOptions({headers:this.headers}));
            dietRequest.subscribe();
        }
    });

    // var headers = new Headers();
    if (rsvp == "true"){
        guest.response = true;
    } else if (rsvp == "false") {
        guest.response = false;
    }
    guest.tea = this.tea[i];
    guest.game = this.game[i];
    var putRequest = this.http.put(this.url + id + "/", JSON.stringify(guest), new RequestOptions({headers: this.headers}));
    putRequest.subscribe();
  }

  addPlusOne(){
    var restrictions = this.restrictions['a'];
    var other = this.extra['a'];
    var newGuest = {}
    newGuest["name"] = this.plusFirst + " " +this.plusLast;
    newGuest["response"] = true;
    newGuest["rsvp"] = this.guests[0].rsvp;
    newGuest["plusone"] = false;
    newGuest["added"] = true;
    newGuest["game"] = this.game['a'];
    newGuest["tea"] = this.tea['a'];
    this.http.delete(this.url + "?rsvp=" + this.guests[0].rsvp, new RequestOptions({headers: this.headers})).toPromise().then((res)=>{
        if (this.plusOneRadio == "true"){
            this.http.post(this.url, newGuest, new RequestOptions({headers: this.headers})).toPromise().then((res)=>{
                this.http.delete(this.dieturl + "?guest=" + res.json().guestid).toPromise().then(()=>{
                    for (let r of restrictions){
                        if (r == 'none'){
                            break;
                        }
                        var dietBody = {}
                        if (r == 'other'){
                            dietBody["restriction"] = other;
                        } else {
                            dietBody["restriction"] = r;
                        }
                        dietBody["guest_id"] = res.json().guestid
                        var dietRequest = this.http.post(this.dieturl, dietBody, new RequestOptions({headers:this.headers}));
                        dietRequest.subscribe();
                    }
                });
            });
        }
    });
  }
}

@Component ({
    selector: 'Done-Dialog',
    template: `
        <h2 mat-dialog-title>Thank you for your response!</h2>
        <p>If you would like to receive an email confirmation of your rsvp, please enter your email below</p>
        <form #rsvpEmail="ngForm">
          <mat-form-field>
            <input [formControl]="email" name="emailValue" placeholder="Enter Email for Confirmation (Optional)" matInput>
            <mat-error *ngIf="email.invalid">{{getErrorMessage()}}</mat-error>
          </mat-form-field>
        </form>
        <mat-dialog-actions>
        <button mat-raised-button [mat-dialog-close]="{'email':email.value}" [disabled]="email.invalid">OK</button>
        </mat-dialog-actions>
    `
})
export class DoneDialog {
    constructor(public dialogRef: MatDialogRef<DoneDialog>){}

    email = new FormControl('', [Validators.email]);

    getErrorMessage() {
      return this.email.hasError('email') ? 'Not a valid email' :'';
    }


}
