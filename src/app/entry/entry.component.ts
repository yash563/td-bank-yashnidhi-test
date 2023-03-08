import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { validPostalCode } from '../validators/postal-code.validator';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {
  entryForm: FormGroup = new FormGroup({});
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.entryForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dob: ['', [Validators.required, this.validateDateOfBirth]],
      postalCode: ['', [Validators.required]]
    }, {
      validator: validPostalCode('postalCode')
    });
    this.setPreviousValues();
  }

  // convenience getter for easy access to form fields
  get f() { return this.entryForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.entryForm.invalid) {
      return;
    }
    this.dataService.entryFormData = Object.assign({}, this.entryForm.value);
    this.router.navigate(['confirmation']);
  }

  onReset() {
    this.submitted = false;
    this.entryForm.reset();
  }

  setPreviousValues() {
    if (this.dataService.entryFormData.firstName) {
      this.entryForm.patchValue(this.dataService.entryFormData);
    } else {
      this.router.navigate(['entry']);
    }
  }

  validateDateOfBirth(control: FormControl): { [key: string]: any } | null {
    if (control.value) {
      const dateOfBirth = new Date(control.value);
      const ageDifMs = Date.now() - dateOfBirth.getTime();
      const ageDate = new Date(ageDifMs);
      const age = Math.abs(ageDate.getUTCFullYear() - 1970);

      // check if date is valid and person is at least 18 years old
      if (isNaN(dateOfBirth.getTime()) || age < 18) {
        return { 'invalidDateOfBirth': true };
      }
    }
    return null;
  }
}
