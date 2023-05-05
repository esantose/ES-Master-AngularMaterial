import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
	selector: 'app-navigation',
	templateUrl: './schematic-layout.component.html',
	styleUrls: ['./schematic-layout.component.scss'],
})
export class SchematicLayoutComponent {
	isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
		map(result => result.matches),
		shareReplay()
	);

	constructor(private breakpointObserver: BreakpointObserver, private router: Router) {}

	public onSelectOption(option: any): void {
		const msg = `Chose option ${option}`;
		console.log(msg);

		if (option === '1') {
			this.router.navigate(['/schematics/dashboard']);
		}

		if (option === '2') {
			this.router.navigate(['schematics/address-form']);
		}

		if (option === '3') {
			this.router.navigate(['schematics/table']);
		}

		if (option === '4') {
			this.router.navigate(['schematics/tree']);
		}

		if (option === '5') {
			this.router.navigate(['schematics/drag-drop']);
		}

		//this.openSnackBar(msg);

		/* To route to another page from here */
		// this.router.navigate(['/home']);
	}
}
