import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { AboutUsComponent } from '../components/about-us/about-us.component';
import { BookComponent } from '../components/tutorial/book/book.component';
import { PageLayoutComponent } from '../components/pages/page-layout/page-layout.component';
import { FormLayoutComponent } from '../components/forms/form-layout/form-layout.component';
import { NavigationComponent } from '../components/schematics/schematic-layout/schematic-layout.component';

const routes1: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent, data: { titulo: 'Home1' } },
	{ path: 'aboutus', component: AboutUsComponent, data: { titulo: 'About Us1' } },
	{
		path: 'tutorial',
		component: BookComponent,
		children: [
			{
				path: '',
				loadChildren: () =>
					import('../components/tutorial/tutorial.module').then(m => m.TutorialModule),
			},
		],
	},
	{
		path: 'pages',
		component: PageLayoutComponent,
		children: [
			{
				path: '',
				loadChildren: () => import('../components/pages/pages.module').then(m => m.PagesModule),
			},
		],
	},
	{
		path: 'forms',
		component: FormLayoutComponent,
		children: [
			{
				path: '',
				loadChildren: () => import('../components/forms/forms.module').then(m => m.FormsModule),
			},
		],
	},
	{
		path: 'schematics',
		component: NavigationComponent,
		children: [
			{
				path: '',
				loadChildren: () =>
					import('../components/schematics/schematics.module').then(m => m.SchematicsModule),
			},
		],
	},

	{ path: '**', redirectTo: '' },
];

const routes: Routes = [
	{
		path: 'dashboard',
		component: LayoutComponent,
		children: [
			{ path: '', redirectTo: 'home', pathMatch: 'full' },
			{ path: 'home', component: HomeComponent, data: { titulo: 'Home' } },
			{ path: 'aboutus', component: AboutUsComponent, data: { titulo: 'About Us' } },
			{
				path: 'tutorial',
				component: BookComponent,
				data: { titulo: 'Tutorial' },
				children: [
					{
						path: '',
						loadChildren: () =>
							import('../components/tutorial/tutorial.module').then(m => m.TutorialModule),
					},
				],
			},
			{
				path: 'pages',
				component: PageLayoutComponent,
				data: { titulo: 'Pages' },
				children: [
					{
						path: '',
						loadChildren: () => import('../components/pages/pages.module').then(m => m.PagesModule),
					},
				],
			},
			{
				path: 'forms',
				component: FormLayoutComponent,
				data: { titulo: 'Responsive Forms ' },
				children: [
					{
						path: '',
						loadChildren: () => import('../components/forms/forms.module').then(m => m.FormsModule),
					},
				],
			},
			{
				path: 'schematics',
				data: { titulo: 'Schematics Samples' },
				component: NavigationComponent,
				children: [
					{
						path: '',
						loadChildren: () =>
							import('../components/schematics/schematics.module').then(m => m.SchematicsModule),
					},
				],
			},
		],
	},

	// { path: '**', redirectTo: '' },
];
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class DashboardRoutingModule {}
