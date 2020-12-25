import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AgentService } from 'src/app/services/agent.service';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {

  private id : any;
  validateForm: FormGroup

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router, private aService : AgentService) { }

  ngOnInit(): void {
    this.setupForm();
    this.getDetails();
  }

  public setupForm(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      pib: [null, [Validators.required]],
      bankAccountNumber: [null, [Validators.required]],
      address: [null, [Validators.required]],
    });
  }

  public getDetails(): void {
    this.id = this.route.snapshot.params.id;
    this.aService.getAgent(this.id).subscribe(data =>{
      console.log(data);
      const formValues = {
        name: data.name,
        pib: data.pib,
        bankAccountNumber: data.bankAccountNumber,
        address: data.address
      }
      this.validateForm.setValue(formValues);
    })
  }

  submitForm(): void {
    console.log(this.validateForm.value);
    this.aService.updateAgent(this.id, this.validateForm.value).subscribe(data => {
      this.router.navigateByUrl(`dashboard`);
    }, error => {
      alert('Error');
    })
  }

}
