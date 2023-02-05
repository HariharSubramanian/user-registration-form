import { Component } from '@angular/core';

@Component({
  selector: 'user-regisration-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {
  form={fullName:"", email:"", phone:"", password:"", confirmPassword:"", termsAndConditions:false}
  userRegistration() {
    console.log("Registration Form Submitted", this.form);
  }
}
