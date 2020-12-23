import { Component, OnInit } from '@angular/core';
import { CarBrandService } from 'src/app/services/car-brand.service';

@Component({
  selector: 'app-car-brands',
  templateUrl: './car-brands.component.html',
  styleUrls: ['./car-brands.component.css']
})
export class CarBrandsComponent implements OnInit {

  public carBrands = [];

  constructor(private cbService: CarBrandService) { }
  

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
  
    
  }

  public delete(id): void {
   /* const body = {
      id: id
    }
    this.gtService.deleteById(body).subscribe(data =>{
      this.getAllGearshiftTypes();
      alert("Obrisan");
    })*/
  }


}
