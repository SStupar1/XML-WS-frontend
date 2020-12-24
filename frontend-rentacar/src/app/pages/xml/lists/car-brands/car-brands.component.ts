import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarBrandService } from 'src/app/services/car-brand.service';

@Component({
  selector: 'app-car-brands',
  templateUrl: './car-brands.component.html',
  styleUrls: ['./car-brands.component.css']
})
export class CarBrandsComponent implements OnInit {

  public carBrands = [];

  constructor(private cbService: CarBrandService, private router: Router) { }
  

  ngOnInit(): void {
    this.getAllCarBrands();
  }

  private getAllCarBrands(): void {
    this.cbService.getAllCarBrands().subscribe(data => {
      this.carBrands = data;
    }, error => {
      alert("Error");
    })
  }

  public update(id): void {
    console.log("id iz CarBrandComponent saljem..." + id);
    this.router.navigateByUrl(`dashboard/updates/update-car-brand/${id}`);
  }

  public delete(id): void {
    this.cbService.deleteCarBrand(id).subscribe(data =>{
      this.getAllCarBrands();
      alert(data.text);
    })
  }


}
