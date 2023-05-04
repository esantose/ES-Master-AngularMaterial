import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
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
	}
}
