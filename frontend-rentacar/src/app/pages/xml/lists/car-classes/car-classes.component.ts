import { Component, OnInit } from '@angular/core';
import { CarClassService} from 'src/app/services/car-class.service';

@Component({
  selector: 'app-car-classes',
  templateUrl: './car-classes.component.html',
  styleUrls: ['./car-classes.component.css']
})
export class CarClassesComponent implements OnInit {

  public carClasses = [];

  constructor(private ccService: CarClassService) { }
  

  ngOnInit(): void {
    this.getAllCarClasses();
  }

  private getAllCarClasses(): void {
    this.ccService.getAllCarClasses().subscribe(data => {
      this.carClasses = data;
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
