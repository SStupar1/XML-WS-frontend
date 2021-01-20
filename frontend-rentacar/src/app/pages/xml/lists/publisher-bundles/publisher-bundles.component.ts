import { Component, OnInit } from '@angular/core';
import { RentService } from 'src/app/services/rent.service';

@Component({
  selector: 'app-publisher-bundles',
  templateUrl: './publisher-bundles.component.html',
  styleUrls: ['./publisher-bundles.component.css']
})
export class PublisherBundlesComponent implements OnInit {

  public user: any;
  public bundles = [];
  private simpleUser = true;

  constructor(private rentService: RentService) { }

  ngOnInit(): void {
    this.setupUser();
    this.getAllPublisherBundles();
  }

  private setupUser(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
  } 

  private getAllPublisherBundles(){
    if(this.user.userRole === 'AGENT'){
      this.simpleUser = false;
    }
    let data = {
      publisherId: this.user.id,
      simpleUser: this.simpleUser
    }
    this.rentService.getAllPublisherBundles(data).subscribe(response => {
      this.bundles = response;
    }, error => {
      console.log(error.error.text);
    })
  }

  approve(bundleId){
    const body = {
      id: bundleId
    }
    this.rentService.approveBundle(body).subscribe(response => {
      location.reload();
    }, error => {
      console.log(error.error.text);
    })
  }

  deny(bundleId){
    const body = {
      id: bundleId
    }
    this.rentService.denyBundle(body).subscribe(response => {
      location.reload();
    }, error => {
      console.log(error.error.text);
    })
  }

}
