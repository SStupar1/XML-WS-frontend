import { Component, OnInit } from '@angular/core';
import { FuelTypeService } from 'src/app/services/fuel-type.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fuel-types',
  templateUrl: './fuel-types.component.html',
  styleUrls: ['./fuel-types.component.css']
})
export class FuelTypesComponent implements OnInit {

  public fuelTypes = [];

  constructor(private ftService: FuelTypeService, private router: Router) { }
  

  ngOnInit(): void {
    this.getAllFuelTypes();
  }

  private getAllFuelTypes(): void {
    this.ftService.getAllFuelTypes().subscribe(data => {
      this.fuelTypes = data;
    }, error => {
      alert("Error");
    })
  }

  public update(id): void {
    this.router.navigateByUrl(`dashboard/updates/update-fuel-type/${id}`);
    
  }

  public delete(id): void {
    this.ftService.deleteFuelType(id).subscribe(data =>{
      this.getAllFuelTypes();
      alert(data.text);
    })
  }

}
