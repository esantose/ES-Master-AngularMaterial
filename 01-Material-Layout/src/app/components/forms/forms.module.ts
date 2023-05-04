import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@shared/material.module';

import { FormsRoutingModule } from './forms-routing.module';
import { FormLayoutComponent } from './form-layout/form-layout.component';
import { Login01Component } from './login01/login01.component';
import { Signup01Component } from './signup01/signup01.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [Login01Component, Signup01Component, FormLayoutComponent],
	imports: [CommonModule, FormsRoutingModule, MaterialModule, ReactiveFormsModule],
})
export class FormsModule {}
