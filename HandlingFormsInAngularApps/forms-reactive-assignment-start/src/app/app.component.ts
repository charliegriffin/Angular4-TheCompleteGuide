import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import { CustomValidators } from "app/custom-validators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  signupForm: FormGroup;

  ngOnInit() {
    this.signupForm = new FormGroup({
      'projectName': new FormControl( null, [Validators.required, 
      CustomValidators.invalidProjectName], CustomValidators.asyncInvalidProjectName),
      'email': new FormControl(null, [Validators.required,
                                      Validators.email]),
      'projectStatus': new FormControl('critical')
    });
  }

  onSubmit() {
    console.log(this.signupForm.value);
    this.signupForm.reset();
  }
}
