import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GearshiftTypeService } from 'src/app/services/gearshift-type.service';


@Component({
  selector: 'app-update-gearshift-type',
  templateUrl: './update-gearshift-type.component.html',
  styleUrls: ['./update-gearshift-type.component.css']
})
export class UpdateGearshiftTypeComponent implements OnInit {

  private id : any;
  validateForm: FormGroup

  constructor(private route: ActivatedRoute, private gtService: GearshiftTypeService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.setupForm();
    this.getDetails();
  }

  public setupForm(): void {
    this.validateForm = this.fb.group({
      type: [null, [Validators.required]],
      numberOfGears: [null, [Validators.required]],
    });
  }

  public getDetails(): void {
    this.id = this.route.snapshot.params.id;
    this.gtService.getGearshiftType(this.id).subscribe(data =>{
      const formValues = {
        type: data.type,
        numberOfGears: data.numberOfGears
      }
      this.validateForm.setValue(formValues);
    })
  }

  submitForm(): void {
    this.gtService.updateGearshiftType(this.id, this.validateForm.value).subscribe(data => {
      this.router.navigateByUrl(`dashboard/lists/gearshift-types`);
    }, error => {
      alert('Error');
    })
    
   console.log(this.validateForm.value);
    
  }

}
