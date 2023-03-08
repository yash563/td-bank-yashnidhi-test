import { FormGroup } from '@angular/forms';

// custom validator to check valid postal code
export function validPostalCode(controlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        var isValidPostalCode = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/.test(control.value);
        // set error on matchingControl if validation fails
        if (!isValidPostalCode) {
            control.setErrors({ inValidPostalCode: true });
        } else {
            control.setErrors(null);
        }
    }
}
