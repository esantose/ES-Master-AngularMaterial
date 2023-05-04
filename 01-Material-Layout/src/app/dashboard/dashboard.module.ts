import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '@shared/material.module';
import { LayoutComponent } from './layout/layout.component';
import { LayoutModule } from 'src/app/dashboard/layout/layout.module';

@NgModule({
	declarations: [LayoutComponent],
	exports: [LayoutComponent],
	imports: [CommonModule, MaterialModule, RouterModule, LayoutModule],
})
export class DashboardModule {}
