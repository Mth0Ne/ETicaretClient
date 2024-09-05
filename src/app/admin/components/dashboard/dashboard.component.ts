import { Component, OnInit } from '@angular/core';
import { AlertifyOptions, AlertifyService, MessageType, Position } from '../../../services/admin/alertify.service';
import { BaseComponent, SpinnerType } from '../../../base/base.component';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent extends BaseComponent implements OnInit{
constructor(private alertify: AlertifyService, spinner: NgxSpinnerService){
  super(spinner)
}

ngOnInit(): void {
  this.showSpinner(SpinnerType.BallScaleMultiple)
}
m(){
  this.alertify.message("Merhaba",{
    messageType : MessageType.Success,
    delay : 5,
    position : Position.TopRight
  })
}
d(){
  this.alertify.dismiss();
}
}
