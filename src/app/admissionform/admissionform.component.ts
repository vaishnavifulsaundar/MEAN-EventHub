import { Component } from '@angular/core';
import {FormBuilder,FormGroup,Validators, FormControl, MinLengthValidator, AbstractControl} from '@angular/forms'


@Component({
  selector: 'app-admissionform',
  templateUrl: './admissionform.component.html',
  styleUrls: ['./admissionform.component.css']
})
export class AdmissionformComponent {
  constructor(public fbobj : FormBuilder)
  {
  }

  MarvellousForm = this.fbobj.group(
    {
      username: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
      lastname: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
      email: new FormControl('', [Validators.required,  Validators.pattern('^[a-zA-Z0-9]+@[a-zA-Z]{1}[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$')]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$'),Validators.maxLength(10),Validators.minLength(10)]),
      address: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
      city: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$'),Validators.minLength(4)]),
      state: new FormControl('', [Validators.required]),
      zipcode: new FormControl('', [Validators.required,Validators.pattern('^[0-9]+$'),Validators.minLength(5)]),
    }
  );
}
