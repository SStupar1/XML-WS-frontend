import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RentService } from 'src/app/services/rent.service';

@Component({
  selector: 'app-add-report',
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.css']
})
export class AddReportComponent implements OnInit {

  validateForm!: FormGroup;
  public ad : any;
  public price : any;
  public text: any;
  public submited: boolean = false;

  constructor(private route: ActivatedRoute ,private fb: FormBuilder, private rentService: RentService) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      kmTraveled: [null],
      informations: [""]
    });
  }


  submitForm(): void {
    //VALIDATE
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    this.text = this.validateForm.value.informations;
    this.submited = true;
    //REQUEST
    const body = {
      reservationId: this.route.snapshot.params.id,
      kmTraveled: this.validateForm.value.kmTraveled
    }
    
    this.rentService.generateReport(body).subscribe(data => {
      this.ad = data.ad;
      this.price = data.price;
    })
    
  }
}
