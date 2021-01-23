import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { PricelistService } from 'src/app/services/pricelist.service';
import { DiscountService } from 'src/app/services/discount.service';

@Component({
  selector: 'app-create-pricelist',
  templateUrl: './create-pricelist.component.html',
  styleUrls: ['./create-pricelist.component.css']
})
export class CreatePricelistComponent implements OnInit {

  validateForm!: FormGroup;
  public discounts = [];
  public selectedDiscount: any = null;

  constructor(private fb: FormBuilder,private discountService: DiscountService, private datePipe: DatePipe, private pricelistService: PricelistService, private router: Router) {}

  ngOnInit(): void {
    this.getDiscounts();
    this.validateForm = this.fb.group({
      pricePerDay: [null, [Validators.required]],
      pricePerKilometer: [null, [Validators.required]],
      priceCdw: [null, [Validators.required]]
    });
  }

  
  private getDiscounts(): void {
    this.discountService.getAllDiscounts().subscribe(data => {
      this.discounts = data;
    }, error => {
      alert("Error");
    })
  }

  submitForm(): void {
    //VALIDATE
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    //REQUEST
    const body = {
      pricePerDay: this.validateForm.value.pricePerDay,
      pricePerKilometer: this.validateForm.value.pricePerKilometer,
      priceCdw: this.validateForm.value.priceCdw,
      discountId: this.selectedDiscount
    }
    this.pricelistService.createPricelist(body).subscribe(data => {
      this.router.navigateByUrl(`dashboard`);
    }, error => {
      alert('Error');
    })
  }

}
