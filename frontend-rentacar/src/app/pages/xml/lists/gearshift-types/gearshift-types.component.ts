import { Component, OnInit } from '@angular/core';
import { GearshiftTypeService } from 'src/app/services/gearshift-type.service';

@Component({
  selector: 'app-gearshift-types',
  templateUrl: './gearshift-types.component.html',
  styleUrls: ['./gearshift-types.component.css']
})
export class GearshiftTypesComponent implements OnInit {

  public gearshiftTypes = [];

  constructor(private gtService: GearshiftTypeService) { }
  

  ngOnInit(): void {
    this.getAllGearshiftTypes();
  }

  private getAllGearshiftTypes(): void {
    this.gtService.getAllGearshiftTypes().subscribe(data => {
      this.gearshiftTypes = data;
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
