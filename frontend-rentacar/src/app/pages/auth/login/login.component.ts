import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationRequestService } from 'src/app/services/registration-request.service';
import {AuthService} from 'src/app/services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: ActivatedRoute,  private rrService: RegistrationRequestService, private router: Router, private authService: AuthService) { }
 
  model: any = {}
  private cart = [];

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    if(id != undefined){
      const body = {
        id: id
      }
      this.rrService.confirmRegistrationRequest(body).subscribe(() => {
        alert('Uspešno ste se registrovali!');
        this.router.navigateByUrl(`login`);
      },
      error => {
        alert("Error login");
      });
    }
  }


  login(): void {
    this.authService.login(this.model).subscribe(data => {
      const user = data;
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', JSON.stringify(user.token));
      localStorage.setItem('cart', JSON.stringify(this.cart));
      this.router.navigateByUrl(`dashboard`);
    }, error => {
      alert("Error login");
    })
  }

}
