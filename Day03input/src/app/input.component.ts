import { Component } from "@angular/core";

@Component({
    selector:'inputs',
    template : '<input type="text" value="hey" [(ngModel)] = "value" (keydown)="ChangeValue()">'
})
export class InputComponent{
    value:string ="shooooo"

    ChangeValue(){
        this.value = "no no";
    }

}