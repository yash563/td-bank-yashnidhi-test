import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  entryForm: FormGroup = new FormGroup({});
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.entryForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dob: ['', [Validators.required]],
      postalCode: ['', [Validators.required]]
    });
    this.setValues();
  }

  // convenience getter for easy access to form fields
  get f() { return this.entryForm.controls; }

  setValues() {
    if(this.dataService.entryFormData.firstName) {
      this.entryForm.patchValue(this.dataService.entryFormData);
      this.entryForm.disable();
    } else {
      this.router.navigate(['entry']);
    }
  }

  onBack() {
    this.router.navigate(['entry']);
  }

  onSubmit() {
    this.router.navigate(['thank-you']);
  }
}