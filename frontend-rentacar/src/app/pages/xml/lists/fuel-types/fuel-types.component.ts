import { Component, OnInit } from '@angular/core';
import { FuelTypeService } from 'src/app/services/fuel-type.service';

@Component({
  selector: 'app-fuel-types',
  templateUrl: './fuel-types.component.html',
  styleUrls: ['./fuel-types.component.css']
})
export class FuelTypesComponent implements OnInit {

  public fuelTypes = [];

  constructor(private ftService: FuelTypeService) { }
  

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
