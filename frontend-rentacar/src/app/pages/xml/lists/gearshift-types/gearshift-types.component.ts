import { Component, OnInit } from '@angular/core';
import { GearshiftTypeService } from 'src/app/services/gearshift-type.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gearshift-types',
  templateUrl: './gearshift-types.component.html',
  styleUrls: ['./gearshift-types.component.css']
})
export class GearshiftTypesComponent implements OnInit {

  public gearshiftTypes = [];

  constructor(private gtService: GearshiftTypeService, private router: Router) { }
  

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
    this.router.navigateByUrl(`dashboard/updates/update-gearshift-type/${id}`);
    
  }

  public delete(id): void {
    this.gtService.deleteGearshiftType(id).subscribe(data =>{
      this.getAllGearshiftTypes();
      alert(data.text);
    })
  }

}
