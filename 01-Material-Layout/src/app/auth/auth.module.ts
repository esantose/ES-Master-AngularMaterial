import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './authRouting.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { TwoFactorsComponent } from './two-factors/two-factors.component';
// import { BreadcrumbsComponent } from '@shared/breadcrumbs/breadcrumbs.component';

@NgModule({
	declarations: [
		// BreadcrumbsComponent,
		LoginComponent,
		RegisterComponent,
		ResetPasswordComponent,
		TwoFactorsComponent,
	],
	imports: [CommonModule, AuthRoutingModule, MaterialModule, ReactiveFormsModule],
})
export class AuthModule {}
