import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public isAdmin: boolean;
  public isAgent: boolean;
  public isSimpleUser: boolean;
  private user: any;


  constructor( private router: Router ) { }
 

   ngOnInit() {
    this.setupUser();
    this.setupUserType();
  }

  private setupUser(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
  } 

  private setupUserType(): void {
    this.isAdmin = false;
    this.isAgent = false;
    this.isSimpleUser = false;
    if(this.user.userRole === 'ADMIN'){
      this.isAdmin = true;
    }else if(this.user.userRole === 'AGENT'){
      this.isAgent = true;
    }else if(this.user.userRole === 'SIMPLE_USER'){
      this.isSimpleUser = true;
    }
  }

  public clearStorage(): void {
    localStorage.clear();
    this.router.navigateByUrl('navbar');
  }
  
  public adminProfile(): void {
    this.router.navigateByUrl(`dashboard/updates/admin/${this.user.id}`);
  }

  public agentProfile(): void {
    this.router.navigateByUrl(`dashboard/updates/agent/${this.user.id}`);
  }

  public simpleUserProfile(): void {
    this.router.navigateByUrl(`dashboard/updates/simple-user/${this.user.id}`);
  }

}
