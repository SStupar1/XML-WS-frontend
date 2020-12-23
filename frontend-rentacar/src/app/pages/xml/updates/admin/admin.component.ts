import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  private id: string;
  model: any = {}

  constructor(private route: ActivatedRoute ,private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.extractId();
    this.adminService.getAdmin(this.id).subscribe(data => {
      this.model.firstName = data.firstName;
      this.model.lastName = data.lastName;
    },
    error => {
      alert(error);
    });

  }

  private extractId(): void {
    this.id = this.route.snapshot.params.id;
  }

  updateAdmin(): void {
    this.adminService.updateAdmin(this.id, this.model).subscribe(data => {
        alert("Profile updated.")
    }, error => {
      alert("Error")
    });
  }
}
