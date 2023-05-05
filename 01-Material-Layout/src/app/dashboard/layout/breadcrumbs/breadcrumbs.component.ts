import { Component, OnDestroy } from '@angular/core';
import { Router, ActivationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

@Component({
	selector: 'app-breadcrumbs',
	templateUrl: './breadcrumbs.component.html',
	styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnDestroy {
	titulo: string = '*****';
	tituloSubs$: Subscription;

	constructor(private router: Router) {
		// this.tituloSubs$ = this.getArgumentosRuta().subscribe(({ titulo }) => {
		// 	this.titulo = titulo;
		// 	document.title = `AdminPro - ${titulo}`;
		// });
		// this.router.events.subscribe(event => { console.log(event) });

		this.tituloSubs$ = this.router.events
			.pipe(
				filter(event => event instanceof ActivationEnd),
				filter(event => (event as ActivationEnd).snapshot.firstChild === null),
				map(event => (event as ActivationEnd).snapshot.data)
			)
			.subscribe(({ titulo }) => {
				console.log(titulo);
				this.titulo = titulo;
				document.title = `AdminPro - ${titulo}`;
			});

		// ==== It work too but it can be destructurar ---
		// .subscribe(data) => {
		// 	console.log(data);
		// 	this.titulo = data.titulo;
		// })
	}

	ngOnDestroy(): void {
		this.tituloSubs$.unsubscribe();
	}

	getArgumentosRuta() {
		// Fernando Herrera, Section 8, Observables y promesas
		return this.router.events.pipe(
			filter(event => event instanceof ActivationEnd),
			filter((event: any) => event.snapshot.firstChild === null),
			map((event: ActivationEnd) => event.snapshot.data)
		);
	}
}
