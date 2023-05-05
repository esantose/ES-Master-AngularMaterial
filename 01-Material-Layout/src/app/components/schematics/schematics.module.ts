import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { SchematicsRoutingModule } from './schematics-routing.module';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HomeComponent } from './home/home.component';
import { SchematicLayoutComponent } from './schematic-layout/schematic-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableComponent } from './table/table.component';
import { TreeComponent } from './tree/tree.component';
import { AddressFormComponent } from './address-form/address-form.component';

@NgModule({
	declarations: [
		DragDropComponent,
		HomeComponent,
		SchematicLayoutComponent,
		DashboardComponent,
		TableComponent,
		TreeComponent,
		AddressFormComponent,
	],
	imports: [
		CommonModule,
		SchematicsRoutingModule,
		DragDropModule,
		MaterialModule,
		ReactiveFormsModule,
	],
})
export class SchematicsModule {}
