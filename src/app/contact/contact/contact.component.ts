import {Component, OnInit} from "@angular/core";
import {EmailValidator, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {phoneNumberValidation} from "./mobile.validation";

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})

export class ContactComponent implements OnInit {
title = 'Want to get in  touch with me? Please fill this form!';
contactForm: FormGroup;

constructor() { }

ngOnInit():void {
  this.createForm();
}

createForm() {
  this.contactForm = new FormGroup({
    name: new FormControl ('',[Validators.required, Validators.minLength(2)]),
    email: new FormControl('',[Validators.required, Validators.email,]) ,
    telephone: new FormControl('',[Validators.required, phoneNumberValidation]),
    message: new FormControl('',[Validators.required, Validators.minLength(20)]),
})
}

get name() {return this.contactForm.get('name');}
get email() {return this.contactForm.get('email');}
get telephone () {return this.contactForm.get('telephone');}
get message() {return this.contactForm.get('message')}

  onSubmit() { }
}
