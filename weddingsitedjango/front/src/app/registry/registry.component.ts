import { Component, OnInit } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent implements OnInit {
  opened = false;
  items = [];
  contribute = [];
  money = [];
  bought = [];
  raised = [];
  showCard = false;
  registryUrl = 'http://localhost:8000/wedding/registryapi/'
  headers = new Headers({
    'Content-Type': 'application/json',
    'X-CSRFToken': this.getCookie('csrftoken')
  });
  constructor(private http : Http, public dialog: MatDialog) { }

  ngOnInit() {
    this.http.get(this.registryUrl).toPromise().then((res)=>{
      this.items=res.json();
      for (let i in this.items) {
        this.contribute[i] = false;
        if (this.items[i].raised){
          this.raised[i] = this.items[i].raised;
        } else {
          this.raised[i] = 0;
        }
      }
    });
  }

  getCookie(name) {
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length == 2)
      return parts.pop().split(";").shift();
  }

  triggerContribute(i) {
    this.contribute[i] = !this.contribute[i];
    this.bought[i] = 0;
  }

  buy(i, amount) {
    this.bought[i] = amount;
    this.opened=true;
    this.raised[i] = Number(this.items[i].raised) + amount;
  }

  getSum(total, value){
    return total+value;
  }
  getTotal(){
    return (this.bought.reduce((a,b)=>a+b,0)).toFixed(2);
  }

  getRemaining(i){
    return(this.items[i].price-this.raised[i]).toFixed(2);
  }

  unbuy(i){
    this.triggerContribute(i);
    this.raised[i]=0;
    if (this.getTotal() == 0){
      this.opened=false;
    }
  }

  checkValid(i){
    if (!this.money[i]) {return false};
    if (this.money[i]<=0) {return false};
    if (this.money[i]>this.items[i].price-this.items[i].raised) {return false};
    var temp = (this.money[i]+"").split('.');
    if (temp.length > 2) {return false};
    if (temp.length == 2 && temp[1].length>2) {return false};
    return true;
  }

  submit(){
    const dialogRef = this.dialog.open(RegistryDialog, {
        width: '350px'
    });
    dialogRef.afterClosed().subscribe(result => {
        console.log("Closed");
    });
  }
}

@Component ({
    selector: 'Registry-Dialog',
    templateUrl: './registry-dialog.component.html',
    styleUrls: ['./registry-dialog.component.css']
})
export class RegistryDialog {
    constructor(public dialogRef: MatDialogRef<RegistryDialog>){}

    onNoClick(): void {
        this.dialogRef.close();
    }
}
