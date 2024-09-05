import { Injectable } from '@angular/core';
import { measureMemory } from 'vm';
declare var alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }
  message(message: string,options: Partial<AlertifyOptions>){
    alertify.set('notifier','position',options.position);
    alertify.set('notifier','delay',options.delay);
    const msg = alertify[options.messageType](message);
    if (options.dismissOthers) 
      msg.dismissOthers()
  }
  dismiss(){
    alertify.dismissAll();
  }

}
export class AlertifyOptions{
  messageType: MessageType = MessageType.Message;
  position: Position = Position.BottomRight;
  delay: Number = 3;
  dismissOthers: Boolean = false;
}
export enum MessageType {
  Error = "error",
  Message = "message",
  Notify = "notify",
  Success = "success",
  Warning = "warning"
}

export enum Position{
  TopCenter = "top-center",
  TopRight = "top-right",
  TopLeft = "top-left",
  BottomRight = "bottom-right",
  BottomLeft = "bottom-left",
  BottomCenter = "bottom-center"
}