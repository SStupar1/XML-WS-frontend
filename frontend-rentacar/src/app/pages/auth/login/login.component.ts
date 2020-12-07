import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/_alert';
import { RegistrationRequestService } from 'src/app/services/registration-request.service';
import {AuthService} from 'src/app/services/auth.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: ActivatedRoute, private message: AlertService, private rrService: RegistrationRequestService, private router: Router, private authService: AuthService) { }
 
  model: any = {}
 

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    if(id != undefined){
      const body = {
        id: id
      }
      this.rrService.confirmRegistrationRequest(body).subscribe(() => {
        //this.message.success('Uspešno ste se registrovali!');
        alert('Uspešno ste se registrovali!');
        this.router.navigateByUrl(`auth/login`);
      },
      error => {
        this.message.info(error.error.message);
      });
    }
  }


  login(): void {
    this.authService.login(this.model).subscribe(data => {
      const user = data.userResponse;
      localStorage.setItem('user', JSON.stringify(user));
    }, error => {
      this.message.info(error.error.message);
    })

  
    
    

  }

}
