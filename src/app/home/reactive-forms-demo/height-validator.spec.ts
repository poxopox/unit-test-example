import { FormControl, FormGroup } from '@angular/forms';
import { heightValidator } from './height-validator';

/**
 * Unit testing doesn't have to be complicated!
 *
 * Testing Angular components  can be tricky because of dependencies and change detection.
 *
 * If you use pure typescript functions and modules, you need not to worry about test harnessing.
 *
 * Form Validators are the perfect candidates for unit testing
 * since they only require an AbstractFormControl to test and don't need change detection.
 */
describe('Height Validator', () => {
  let formGroup;

  beforeEach(() => {
    formGroup = new FormGroup({
      feet: new FormControl(),
      inches: new FormControl(),
    });
  });

  it('should return an error object if just the feet unit is exceeded', () => {
    formGroup.setValue({ feet: 2, inches: 0 });
    expect(heightValidator(1, 1)(formGroup)).toEqual({ tooTall: true });
  });

  it('should return an error object if just the feet unit is the same but the inches are exceeded', () => {
    formGroup.setValue({ feet: 1, inches: 2 });
    expect(heightValidator(1, 1)(formGroup)).toEqual({ tooTall: true });
  });

  it('should return null if the input parameters are not exceeded', () => {
    formGroup.setValue({ feet: 2, inches: 2 });
    expect(heightValidator(3, 3)(formGroup)).toEqual(null);
  });
});
