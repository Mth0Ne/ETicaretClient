import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CustomToastrService {

  constructor(private toastr: ToastrService) { }
  message(message: string, title: string, ToastrOptions: Partial<ToastrOptions>){
    this.toastr[ToastrOptions.messaggeType](message,title,{
      positionClass: ToastrOptions.position
    })
  }
}

export class ToastrOptions{
  messaggeType: ToastrMessageType;
  position: ToastrPosition
}

export enum ToastrMessageType{
  Error = "error",
  Info = "info",
  Success = "success",
  Warning = "warning"
}

export enum ToastrPosition{
    TopRight = "toast-top-right",
    BottomRight = "toast-bottom-right",
    TopLeft = "toast-top-left",
    BottomLeft = "toast-bottom-left",
    TopFullWidth = "toast-top-full-width",
    BottomFullWidth = "toast-bottom-full-width",
    TopCenter = "toast-top-center",
    BottomCenter = "toast-bottom-center"
}