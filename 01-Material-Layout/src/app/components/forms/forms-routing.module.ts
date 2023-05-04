import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login01Component } from './login01/login01.component';
import { Signup01Component } from './signup01/signup01.component';

const routes: Routes = [
	{
		path: '',
		children: [
			{ path: 'login01', component: Login01Component },
			{ path: 'signup01', component: Signup01Component },
			{ path: '**', redirectTo: '' },
		],
	},
	{ path: '', redirectTo: 'introduction', pathMatch: 'full' },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class FormsRoutingModule {}
