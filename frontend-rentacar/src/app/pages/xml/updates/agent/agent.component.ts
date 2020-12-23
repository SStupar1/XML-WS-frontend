import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgentService } from 'src/app/services/agent.service';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {

  private id: string;
  model: any = {}

  constructor(private route: ActivatedRoute ,private agentService: AgentService, private router: Router) { }

  ngOnInit(): void {
    this.extractId();
    this.agentService.getAgent(this.id).subscribe(data => {
      this.model.name = data.name;
      this.model.pib = data.pib;
      this.model.bankAccountNumber = data.bankAccountNumber;
      this.model.address = data.address;
    },
    error => {
      alert(error);
    });

  }

  private extractId(): void {
    this.id = this.route.snapshot.params.id;
  }

  updateAgent(): void {
    this.agentService.updateAgent(this.id, this.model).subscribe(data => {
        alert("Profile updated.")
    }, error => {
      alert("Error")
    });
  }

}
