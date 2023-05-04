import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Chpt01IntroductionComponent } from './chpt01-introduction/chpt01-introduction.component';
import { Chpt02GettingStartedComponent } from './chpt02-getting-started/chpt02-getting-started.component';

const routes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'introduction',
				component: Chpt01IntroductionComponent,
				data: { titulo: 'introduction' },
			},
			{
				path: 'getting-started',
				component: Chpt02GettingStartedComponent,
				data: { titulo: 'getting' },
			},
			{ path: '**', redirectTo: '' },
		],
	},
	{ path: '', redirectTo: 'introduction', pathMatch: 'full' },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class TutorialRoutingModule {}
