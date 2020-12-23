import { Component, OnInit } from '@angular/core';
import { CarModelService } from 'src/app/services/car-model.service';

@Component({
  selector: 'app-car-models',
  templateUrl: './car-models.component.html',
  styleUrls: ['./car-models.component.css']
})
export class CarModelsComponent implements OnInit {

  public carModels = [];

  constructor(private cmService: CarModelService) { }
  

  ngOnInit(): void {
    this.getAllCarModels();
  }

  private getAllCarModels(): void {
    this.cmService.getAllCarModels().subscribe(data => {
      this.carModels = data;
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
