import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@shared/material.module';

import { PagesRoutingModule } from './pages-routing.module';
import { PageLayoutComponent } from './page-layout/page-layout.component';
import { Page01Component } from './page01/page01.component';
import { Page02Component } from './page02/page02.component';

@NgModule({
	declarations: [PageLayoutComponent, Page01Component, Page02Component],
	imports: [CommonModule, PagesRoutingModule, MaterialModule],
})
export class PagesModule {}
