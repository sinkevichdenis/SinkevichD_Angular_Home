import { AbstractControl } from '@angular/forms';
import { Observable, of } from 'rxjs';

export class MyValidators {
  static wordExceptionSync(control: AbstractControl)
  : {[key: string]: boolean} | null  {
    const valid = control.value !== 'Test';
    return valid ? null : { wordExceptionSync: true };
  }

  static wordExceptionAsync(control: AbstractControl)
  : Observable<{[key: string]: boolean} | null > {
    const valid = control.value !== 'test';
    return of(valid ? null : { wordExceptionAsync: true });
  }
}