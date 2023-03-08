import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  entryFormData: any = {
    firstName: '',
    lastName: '',
    dob: '',
    postalCode: ''
  };
}
