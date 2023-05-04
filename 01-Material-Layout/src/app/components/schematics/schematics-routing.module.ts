import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { TableComponent } from './table/table.component';
import { TreeComponent } from './tree/tree.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent, data: { titulo: 'Schematics: Home' } },
	{ path: 'dashboard', component: DashboardComponent, data: { titulo: 'Schematics Dashboard' } },
	{
		path: 'address-form',
		component: AddressFormComponent,
		data: { titulo: 'Schematics Address-Form' },
	},
	{ path: 'table', component: TableComponent, data: { titulo: 'Schematics Table' } },
	{ path: 'tree', component: TreeComponent, data: { titulo: 'Schematics Tree' } },
	{ path: 'drag-drop', component: DragDropComponent, data: { titulo: 'Schematics Drag & Drop' } },
	{ path: '**', component: DashboardComponent },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class SchematicsRoutingModule {}
