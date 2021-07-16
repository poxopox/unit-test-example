import { ValidatorFn } from '@angular/forms';

export const heightValidator: (maxHeightFt, maxHeightInch) => ValidatorFn = (
  maxHeightFt,
  maxHeightInch
) => {
  return (formGroup) => {
    if (
      formGroup.get('feet').value > maxHeightFt ||
      (formGroup.get('feet').value === maxHeightFt &&
        formGroup.get('inches').value > maxHeightInch)
    ) {
      return { tooTall: true };
    } else {
      return null;
    }
  };
};
