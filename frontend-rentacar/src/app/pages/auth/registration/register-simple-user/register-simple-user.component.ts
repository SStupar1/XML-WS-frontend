import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-simple-user',
  templateUrl: './register-simple-user.component.html',
  styleUrls: ['./register-simple-user.component.css']
})
export class RegisterSimpleUserComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  model: any = {}

  ngOnInit(): void {
  }


  register(): void {
        console.log(this.model);

    this.authService.registerSimpleUser(this.model).subscribe(data => {
        alert('Uspešno ste se registrovali!');
        this.router.navigateByUrl(`login`);
    }, error => {
      alert('Error');
    })

  }
}
