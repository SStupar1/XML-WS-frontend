import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-agent',
  templateUrl: './register-agent.component.html',
  styleUrls: ['./register-agent.component.css']
})
export class RegisterAgentComponent implements OnInit {

  validateForm!: FormGroup;

  submitForm(): void {
    //VALIDATE
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    //REQUEST
    const body = {
      username: this.validateForm.value.username,
      password: this.validateForm.value.password,
      rePassword: this.validateForm.value.rePassword,
      name: this.validateForm.value.name,
      pib: this.validateForm.value.pib,
      address: this.validateForm.value.address,
      bankAccountNumber: this.validateForm.value.bankAccountNumber,
      dateFounded: this.datePipe.transform(this.validateForm.value.dateFounded,"yyyy/MM/dd")
    }
    console.log(body);
    this.authService.registerAgent(this.validateForm.value).subscribe(data => {
      alert('Uspesno ste registrovali agenta!');
      this.router.navigateByUrl(`dashboard`);
  }, error => {
    alert('Error');
  })

  }
  //VALIDATE
  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }
  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  //CONSTRUCTOR
  constructor(private fb: FormBuilder, private datePipe: DatePipe, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      rePassword: [null, [Validators.required, this.confirmationValidator]],
      name: [null, [Validators.required]],
      pib: [null, [Validators.required]],
      bankAccountNumber: [null, [Validators.required]],
      address: [null, [Validators.required]],
      dateFounded: [null]
    });
  }
}
