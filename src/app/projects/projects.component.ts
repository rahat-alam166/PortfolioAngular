import { Component } from '@angular/core';
import { Project } from '../Projects';
import {PROJECTS} from '../mock-projects';
import { ProjectServiceService } from '../project-service.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [];
  constructor(private projectService: ProjectServiceService) {};
  ngOnInit(): void
  {
    this.projectService.getProjects().subscribe((projects) => this.projects = projects);
  }
  addProject(project: Project)
  {
    this.projectService.addProject(project).subscribe((project) => this.projects.push(project));
  }

}
