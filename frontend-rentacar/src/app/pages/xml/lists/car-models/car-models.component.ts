import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarModelService } from 'src/app/services/car-model.service';

@Component({
  selector: 'app-car-models',
  templateUrl: './car-models.component.html',
  styleUrls: ['./car-models.component.css']
})
export class CarModelsComponent implements OnInit {

  public carModels = [];

  constructor(private cmService: CarModelService, private router: Router) { }
  

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
    this.router.navigateByUrl(`dashboard/updates/update-car-model/${id}`);
  }

  public delete(id): void {
    this.cmService.deleteCarModel(id).subscribe(data =>{
      this.getAllCarModels();
      alert(data.text);
    })
  }

}
