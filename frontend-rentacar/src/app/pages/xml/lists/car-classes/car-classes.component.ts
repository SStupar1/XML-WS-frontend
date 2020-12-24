import { Component, OnInit } from '@angular/core';
import { CarClassService} from 'src/app/services/car-class.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-classes',
  templateUrl: './car-classes.component.html',
  styleUrls: ['./car-classes.component.css']
})
export class CarClassesComponent implements OnInit {

  public carClasses = [];

  constructor(private ccService: CarClassService, private router: Router) { }
  

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
    this.router.navigateByUrl(`dashboard/updates/update-car-class/${id}`);
    
  }

  public delete(id): void {
    this.ccService.deleteCarClass(id).subscribe(data =>{
      this.getAllCarClasses();
      alert(data.text);
    })
  }

}
