import { Component } from "@angular/core";

@Component({
    selector:'inputs',
    template : '<input type="text" value="hey" [(ngModel)] = "value" (keydown)="ChangeValue()">'
})
export class InputComponent{
    value:string ="default value";
    
    ChangeValue(){
        this.value = "Value changed";
    }



}