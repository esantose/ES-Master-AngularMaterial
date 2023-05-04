import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from '../../shared/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [BreadcrumbsComponent, SidebarComponent, HeaderComponent, FooterComponent],
	exports: [BreadcrumbsComponent, SidebarComponent, HeaderComponent, FooterComponent],
	imports: [CommonModule, MaterialModule, RouterModule],
})
export class LayoutModule {}
