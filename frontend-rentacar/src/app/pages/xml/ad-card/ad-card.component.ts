import { Component, OnInit, Input } from '@angular/core';
import { AgentService } from 'src/app/services/agent.service';
import { SimpleUserService } from 'src/app/services/simple-user.service';

@Component({
  selector: 'app-ad-card',
  templateUrl: './ad-card.component.html',
  styleUrls: ['./ad-card.component.css']
})
export class AdCardComponent implements OnInit {

  @Input() ad: any;
  @Input() rentAction: boolean; //u zavisnosti od ovog parametra renderujemo akcije u card komponenti
  private user: any;
  private publisher : any;
  


  constructor(private suService: SimpleUserService, private agentService: AgentService) { }

  ngOnInit(): void {
    this.setupUser();
    this.setupPublisher();
  }

  private setupUser(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
  } 

  private setupPublisher(): void{
    if(this.ad.simpleUser){
      this.suService.getSimpleUser(this.ad.publisherId).subscribe(data =>{
        this.publisher = data;
      })
    }else{
      this.agentService.getAgent(this.ad.publisherId).subscribe(data =>{
        this.publisher = data;
      })
    }
  }
}
