import { Component, OnInit, Input } from '@angular/core';
import { Address } from '../address';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent implements OnInit {
  @Input() address = new Address();

  constructor() { }

  ngOnInit() {
  }

  sendToConsole() {
    console.log(this.address);
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  nameFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(50)
  ]);

  streetFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(100)
  ]);

  street2FormControl = new FormControl('', [
    Validators.maxLength(100)
  ]);

  cityFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(50)
  ]);

  stateFormControl = new FormControl('', [
    Validators.required,   
    Validators.minLength(2), 
    Validators.maxLength(2)
  ]);

  postalCodeFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(5),    
    Validators.maxLength(10)
  ]);


}
