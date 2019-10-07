import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyValidators } from './app.validators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  private emailRegEx: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  myForm : FormGroup = new FormGroup({
    "projectName": new FormControl(
      '', 
      [
        Validators.required, 
        MyValidators.wordExceptionSync
      ],
      MyValidators.wordExceptionAsync
      ),
    "mail": new FormControl(
      '', 
      [
        Validators.required, 
        Validators.pattern(this.emailRegEx)
      ]
    ),
    "projectStatusDropdown": new FormControl('critical'),
  });

  get projectName() {
    return this.myForm.get('projectName');
  }

  onSubmit(){
      console.log(this.myForm.value);
  }
}
