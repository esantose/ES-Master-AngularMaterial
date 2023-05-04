import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@shared/material.module';

import { TutorialRoutingModule } from './tutorial-routing.module';
import { BookComponent } from './book/book.component';
import { Chpt01IntroductionComponent } from './chpt01-introduction/chpt01-introduction.component';
import { Chpt02GettingStartedComponent } from './chpt02-getting-started/chpt02-getting-started.component';

@NgModule({
	declarations: [BookComponent, Chpt01IntroductionComponent, Chpt02GettingStartedComponent],
	imports: [CommonModule, TutorialRoutingModule, MaterialModule],
})
export class TutorialModule {}
