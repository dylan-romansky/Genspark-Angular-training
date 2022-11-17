import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reactive Form';
  loginform = new FormGroup({
  user: new FormControl('', Validators.required),
  password: new FormControl <number | string>('', {nonNullable:true}),
  phone: new FormControl('', Validators.required),
  favouriteWord: new FormControl('', Validators.required)
  });

  get email() {
  	return this.loginform.get('email');
  }
  loginconfirm() {
  	console.log(this.loginform.value);
  }
}
