import { Component, OnInit, Inject } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { Router } from '@angular/router';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent implements OnInit {
  columns = 2;
  rowHeight = "fit"
  opened = false;
  config = new MatSnackBarConfig();
  edit = false;
  enterCode = false;
  items = [];
  oldAmounts = [];
  contribute = [];
  money = [];
  bought = [];
  raised = [];
  editName = "";
  editEmail = "";
  editMessage = "";
  code = "";
  registryUrl = '/wedding/registryapi/'
  contributionUrl = '/wedding/contributionapi/'
  headers = new Headers({
    'Content-Type': 'application/json',
    'X-CSRFToken': this.getCookie('csrftoken')
  });
  constructor(private http : Http, public dialog: MatDialog, private router: Router, public snackBar: MatSnackBar) { }

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
    this.config.duration = 1000;
    this.config.panelClass = ['snackClass'];
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

  triggerCode() {
    this.enterCode = !this.enterCode;
  }

  buy(i, amount) {
    this.bought[i] = amount;
    this.opened=true;
    this.raised[i] = Number(this.items[i].raised) + amount;
    this.snackBar.open(this.items[i].name + " added to cart", undefined, this.config);
  }

  getTotal(){
    return (this.bought.reduce((a,b)=>a+b,0)).toFixed(2);
  }

  getRemaining(i){
    return(this.items[i].price-this.raised[i]).toFixed(2);
  }

  unbuy(i){
    this.triggerContribute(i);
    if (this.edit && this.oldAmounts[i]){
      this.raised[i]=this.items[i].raised-this.oldAmounts[i]
    } else {
      this.raised[i]=this.items[i].raised;
    }
    if (this.getTotal() == 0){
      this.opened=false;
    }
    this.snackBar.open(this.items[i].name + " removed from cart", undefined, this.config);
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

  submit(): void {
    var dialogRef;
    if (this.code == ""){
      this.code=Math.random().toString(36).substring(2,6).toUpperCase();
    }
    if (this.edit){
        dialogRef = this.dialog.open(EditDialog, {
        disableClose: true,
        width: '500px',
        data: {
          items: this.items,
          bought: this.bought,
          code: this.code,
          name: this.editName,
          message: this.editMessage,
          email: this.editEmail
        }
      });
    } else {
      dialogRef = this.dialog.open(RegistryDialog, {
          disableClose: true,
          width: '500px',
          data: {
            items: this.items,
            bought: this.bought,
            code: this.code
          }
      });
    }
    dialogRef.afterClosed().subscribe(result => {
        if (result != "Cancel"){
          this.http.delete(this.contributionUrl + "?code=" + this.code).toPromise().then((res)=>{
            for (let c in this.contribute){
              if (this.contribute[c] && this.bought[c] > 0){
                var newContribution = {};
                newContribution["name"]=result.name;
                newContribution["email"]=result.email;
                newContribution["message"]=result.message;
                newContribution["amount"]=this.bought[c];
                newContribution["itemid"]=this.items[c].id;
                newContribution["code"]=this.code;
                this.http.post(this.contributionUrl, newContribution, new RequestOptions({headers: this.headers})).toPromise().then((res)=>{
                });
              }
              if (this.edit || (this.contribute && this.bought[c] > 0)){
                var newItem = {}
                newItem["raised"]=this.raised[c];
                var patchRequest = this.http.patch(this.registryUrl + this.items[c].id + "/", JSON.stringify(newItem), new RequestOptions({headers: this.headers}));
                patchRequest.subscribe();
              }
            }
          });
          if (result.email || (this.getTotal() == 0)){
            var email = {}
            var body = "<h2>Hello";
            if (result.name){
              body = body + " " + result.name + "!</h2>"
            }
            else {
              body = body + "!</h2>"
            }
            if (this.getTotal() == 0){
              body = body + "<p>We realize that supporting us financially is not always possible. Please know that we still value your continued support in ways of prayer and love as we start this new chapter in our lives!</p><hr><p><strong>Sean and Tiffanie</strong></p>"
            }
            else if (!this.edit){
              body = body + "<p>Thank you for your contribution to our Registry! What you have committed to can be found below. At the wedding there will be an opportunity to leave cash or cheque (payable to Sean Baergen) in order to pay for your committments. If you prefer you can also e-transfer us (sean.tiffanie@gmail.com).</p><p>If you would like to modify your commitment, just return to <a href=http://seanandtiffanie2019.ca/registry>the registry</a> and enter in your code: <strong>" + this.code + "</strong>";
            }
            else {
              body = body + "<p>Your contribution has been modified. What you have committed to can be found below. At the wedding there will be an opportunity to leave cash or cheque (payable to Sean Baergen) in order to pay for your committments. If you prefer you can also e-transfer us (sean.tiffanie@gmail.com).</p><p>If you would like to further modify your commitment, just return to <a href=http://http://seanandtiffanie2019.ca/registry>the registry</a> and enter in your code: <strong>" + this.code + "</strong>";
            }
            if (this.getTotal() != 0){
              body = body + "<h3>Items Commited To</h3><hr>";

              for (let b in this.bought){
                if (this.bought[b]){
                  body = body + "<p>Item: " + this.items[b].name + "</p>";
                  body = body + "<p>Designated: $" + this.bought[b] + "</p><hr>";
                }
              }
              body = body + "<strong>Total: $" + this.getTotal() + "</strong><hr>"
              if (result.message){
                body = body + "<p>Message: " + result.message + "</p>";
              }
              body = body + "<br><p>You can respond to this email with any questions you might have</p><p>Thank you for your support towards us starting this new chapter in our lives!</p><hr><p><strong>Sean and Tiffanie</strong></p>";
              email["toEmail"]=result.email;
            }
            else {
              email["toEmail"]=this.editEmail;
            }
            email["message"]=body;
            email["subject"]="Registry Contribution Confirmation";
            this.http.post(this.contributionUrl + "email/", JSON.stringify(email),new RequestOptions({headers: this.headers})).toPromise().then((res)=>{
            })
          }
          this.router.navigateByUrl('/home');
        }
    });
  }

  checkCode(code): void {
    this.http.get(this.contributionUrl + "?code=" + code.value.toUpperCase()).toPromise().then((res)=>{
        if (res.json().length != 0){
          this.code = code.value.toUpperCase();
          this.edit = true;
          this.enterCode = false;
        } else {
          var dialog = this.dialog.open(NotFoundDialog);
          this.edit = false;
          this.code = "";
          return
        }
        for (let c of res.json()){
          for (let i in this.items){
            this.opened=true
            if (this.items[i].id == c.itemid){
              this.contribute[i] = true;
              this.money[i] = Number(c.amount);
              this.bought[i] = Number(c.amount);
              this.oldAmounts[i] = Number(c.amount);
              this.editName = res.json()[0].name;
              this.editMessage = res.json()[0].message;
              this.editEmail = res.json()[0].email;
              break;
            }
          }
        }
    });
  }
}

@Component ({
    selector: 'Registry-Dialog',
    templateUrl: './registry-dialog.component.html',
    styleUrls: ['./registry-dialog.component.css']
})
export class RegistryDialog {
    constructor(@Inject(MAT_DIALOG_DATA) private data,
      public dialogRef: MatDialogRef<RegistryDialog>){
    }

    getTotal(){
      return (this.data.bought.reduce((a,b)=>a+b,0)).toFixed(2);
    }

    email = new FormControl('', [Validators.email]);

    getErrorMessage() {
      return this.email.hasError('email') ? 'Not a valid email' :'';
    }
}

@Component ({
    selector: 'Edit-Dialog',
    templateUrl: './edit-dialog.component.html',
    styleUrls: ['./edit-dialog.component.css']
})
export class EditDialog implements OnInit{
    form: FormGroup;

    constructor(
      @Inject(MAT_DIALOG_DATA) private data,
      public dialogRef: MatDialogRef<EditDialog>,
      private formBuilder: FormBuilder
      ){}

    ngOnInit(){
      this.form = this.formBuilder.group({
        personName: this.data.name,
        email: [this.data.email, [Validators.email]],
        message: this.data.message
      })

    }
    getTotal(){
      return (this.data.bought.reduce((a,b)=>a+b,0)).toFixed(2);
    }

    noItems() {
      for (let b of this.data.bought){
        if (b && b!=0){
          return false;
        }
      }
      return true;
    }

    getErrorMessage() {
      return this.form.invalid ? 'Not a valid email' :'';
    }
}

@Component ({
    selector: 'Not-Found-Dialog',
    template: `
    <mat-dialog-content><strong>Code Not Found!</strong><br>
    Email <a href="mailto:sean.tiffanie@gmail.com">sean.tiffanie@gmail.com</a> if you have lost your code</mat-dialog-content>
    <mat-dialog-actions>
    <button mat-raised-button [mat-dialog-close]="'OK'" cdkFocusInitial>OK</button>
    </mat-dialog-actions>
    `
})
export class NotFoundDialog {}


