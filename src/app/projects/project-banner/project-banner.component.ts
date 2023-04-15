import { Component, Input } from '@angular/core';
import { Project } from '../shared/project.model';

@Component({
  selector: 'app-project-banner',
  templateUrl: './project-banner.component.html',
  styleUrls: ['./project-banner.component.css']
})
export class ProjectBannerComponent {
  @Input()
  projects: Project[] = [];
}
