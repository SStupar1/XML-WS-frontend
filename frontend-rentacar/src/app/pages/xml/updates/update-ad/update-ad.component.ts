import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdService } from 'src/app/services/ad.service';

@Component({
  selector: 'app-update-ad',
  templateUrl: './update-ad.component.html',
  styleUrls: ['./update-ad.component.css']
})
export class UpdateAdComponent implements OnInit {

  private id : any;
  validateForm: FormGroup

  constructor(private route: ActivatedRoute, private adService: AdService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.getDetails();
    this.setupForm();
  }

  public setupForm(): void {
    this.validateForm = this.fb.group({
      limitedKm: [null, [Validators.required]],
      cdw: [null, [Validators.required]], 
      seats: [null, [Validators.required]],
    
    });
  }

  submitForm(): void {
    this.adService.updateAd(this.id, this.validateForm.value).subscribe(data => {
    }, error => {
      alert('Error');
    })
    
   console.log(this.validateForm.value);
    
  }

  public getDetails(): void {
    this.id = this.route.snapshot.params.id;
    this.adService.getAd(this.id).subscribe(data =>{
      const formValues = {
        limitedKm: data.limitedKm,
        cdw: data.cdw,
        seats: data.seats
      }
      this.validateForm.setValue(formValues);
    })
  }
}
