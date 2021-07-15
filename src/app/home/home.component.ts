import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  appFormGroup = new FormGroup({
    name: new FormControl(),
    age: new FormControl(),
    height: new FormGroup({
      feet: new FormControl(),
      inches: new FormControl(),
    }),
    maxGCount: new FormControl(),
    spaceFlightCount: new FormControl(),
    methodOfTravel: new FormControl(),
    percentOfBrainDamage: new FormControl(0),
    allergies: new FormArray([
      new FormGroup({
        typeOfAllergy: new FormControl(),
        description: new FormControl(),
      }),
    ]),
  });
  thumbDisplay(value) {
    return `${value}%`;
  }
  get heightFormGroup(): FormGroup {
    return (this.appFormGroup.get('height') as FormGroup) || null;
  }

  constructor() {}

  ngOnInit() {
    this.appFormGroup.valueChanges
      .pipe(map(({ maxGCount }) => maxGCount))
      .subscribe((maxGCount) => {});
  }
}
