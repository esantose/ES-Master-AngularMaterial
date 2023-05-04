import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
	public opened = true;

	constructor(private router: Router) {}

	public onSelectOption(option: any): void {
		const msg = `Chose option ${option}`;
		console.log(msg);

		if (option === '1') {
			this.router.navigate(['/login']);
		}

		if (option === '2') {
			this.router.navigate(['/register']);
		}

		//this.openSnackBar(msg);

		/* To route to another page from here */
		// this.router.navigate(['/home']);
	}
}
