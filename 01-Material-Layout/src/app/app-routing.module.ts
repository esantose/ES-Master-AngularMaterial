import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Modulos
import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';
import { AuthRoutingModule } from './auth/authRouting.module';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
	},
	{
		path: 'dashboard',
		loadChildren: () =>
			import('./dashboard/dashboard.module').then(modulo => modulo.DashboardModule),
	},
	{ path: '**', component: NopagefoundComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes), AuthRoutingModule, DashboardRoutingModule],
	exports: [RouterModule],
})
export class AppRoutingModule {}
