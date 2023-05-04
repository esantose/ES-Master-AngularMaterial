import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import '~@fortawesome/fontawesome-free/css/all.css';

import { FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-login01',
	templateUrl: './login01.component.html',
	styleUrls: ['./login01.component.scss'],
})
export class Login01Component {
	frmLogin = this.formBuilder.group({
		username: [localStorage.getItem('username') || '', [Validators.required, Validators.email]],
		password: ['', Validators.required],
		remember: [false],
	});
	constructor(private formBuilder: FormBuilder, private router: Router) {}

	login(): void {}

	toggleForgetPassword(): void {
		this.router.navigate(['/reset-password']);
	}
}
