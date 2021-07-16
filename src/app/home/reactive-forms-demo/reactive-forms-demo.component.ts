import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';
import { heightValidator } from './height-validator';

@Component({
  selector: 'app-reactive-forms-demo',
  templateUrl: './reactive-forms-demo.component.html',
  styleUrls: ['./reactive-forms-demo.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ReactiveFormsDemoComponent implements OnInit {
  appFormGroup = new FormGroup({
    name: new FormControl(),
    age: new FormControl(),
    height: new FormGroup(
      {
        feet: new FormControl(),
        inches: new FormControl(),
      },
      [heightValidator(8, 2)]
    ),
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

  ngOnInit() {}
}
