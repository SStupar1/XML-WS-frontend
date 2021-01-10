import { Component, OnInit } from '@angular/core';
import { AdService } from 'src/app/services/ad.service';
import { AgentService } from 'src/app/services/agent.service';
import { SimpleUserService } from 'src/app/services/simple-user.service';

@Component({
  selector: 'app-rent-ads',
  templateUrl: './rent-ads.component.html',
  styleUrls: ['./rent-ads.component.css']
})
export class RentAdsComponent implements OnInit {

  public ads = [];
  private user: any;
  checked = true;
  private show: boolean;
  private publisher : any;
  private buttonName : any = 'Show publisher details';

  constructor(private adService: AdService, private agentService: AgentService, private suService: SimpleUserService) {}

  ngOnInit(): void {
    this.show = false;
    this.setupUser();
    this.getAllPublisherAds();
  }

  private setupUser(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
  } 

  private getAllPublisherAds(): void {
    this.adService.getAllPublisherAds(this.user.id).subscribe(data => {
      this.ads = data;
    }, error => {
      alert("Error");
    })
  }

  private toggle(simpleUser, publisherId): void{
    
    if(!this.show){
      this.buttonName = 'Hide';
      this.show = true;
    }else {
      this.buttonName = 'Show publisher details';
      this.show = false;
    }

    if(simpleUser){
      this.suService.getSimpleUser(publisherId).subscribe(data =>{
        this.publisher = data;
      })
    }else{
      this.agentService.getAgent(publisherId).subscribe(data =>{
        this.publisher = data;
      })
    }
  }
  /*

  private getPublisher(simpleUser, publisherId): void {
    if(simpleUser){
      this.suService.getSimpleUser(publisherId).subscribe(data =>{
        return data;
      })
    }else{
      this.agentService.getAgent(publisherId).subscribe(data =>{
        return data;
      })
    }
  }
*/

}
