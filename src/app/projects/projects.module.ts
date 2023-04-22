import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsContainerComponent } from './projects-container/projects-container.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectFormComponent } from './project-form/project-form.component';
import { ProjectBannerComponent } from './project-banner/project-banner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidationErrorsComponent } from '../shared/validation-errors/validation-errors.component';
import { ProjectDetailContainerComponent } from './project-detail-container/project-detail-container.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { SharedModule } from '../shared/shared.module';
import { FilterPipe } from '../shared/filter.pipe';

@NgModule({
  declarations: [
    ProjectsContainerComponent,
    ProjectListComponent,
    ProjectCardComponent,
    ProjectFormComponent,
    ProjectBannerComponent,
    ValidationErrorsComponent,
    ProjectDetailContainerComponent,
    ProjectDetailComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule
  ],
  exports: [ProjectsContainerComponent]
})
export class ProjectsModule { }
