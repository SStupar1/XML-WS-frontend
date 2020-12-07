import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/services/auth.service';
import { AlertService } from 'src/app/_alert';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private authService: AuthService, private message: AlertService, private router: Router) { }

  model: any = {}

  ngOnInit(): void {
  }


  register(): void {
        console.log(this.model);

    this.authService.registerSimpleUser(this.model).subscribe(data => {
        alert('Uspešno ste se registrovali!');
        this.router.navigateByUrl(`login`);
    }, error => {
      this.message.info(error.error.message);
    })

  }

}
