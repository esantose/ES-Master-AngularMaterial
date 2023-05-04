import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page01Component } from './page01/page01.component';
import { Page02Component } from './page02/page02.component';

const routes: Routes = [
	{
		path: '',
		children: [
			{ path: 'page01', component: Page01Component, data: { titulo: 'page01' } },
			{ path: 'page02', component: Page02Component, data: { titulo: 'page02' } },
			{ path: '**', redirectTo: '' },
		],
	},
	{ path: '', redirectTo: 'page01', pathMatch: 'full' },
	// {
	//   path: '**',
	//   component: PageNotFoundComponent
	// }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PagesRoutingModule {}
