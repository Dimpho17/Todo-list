import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {



  form: FormGroup = new FormGroup({
    // name: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),

  });


  constructor(private userService: UserService, private router: Router,) { }

  onSubmit(email: string, password: string) {

if (!email || !password ) {
  alert('Email or Password required')
  return;
}

      this.userService.login({ password, email}).subscribe(
        (Login) => {
          this.form.reset();
          this.router.navigate(['/home']);
        }
      )

  }
}

  
      
 