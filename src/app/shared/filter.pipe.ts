import { Pipe, PipeTransform } from '@angular/core';
import { Project } from '../projects/shared/project.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allProjects: Project[], filterBy: string): Project[] {
    if (filterBy.length === 0) {
      return allProjects;
    }

    let filteredProjects: Project[] = []
    for (let project of allProjects) {
      if (project.name.includes(filterBy)) {
        filteredProjects.push(project)
      }
    }
    return filteredProjects
  }

}
