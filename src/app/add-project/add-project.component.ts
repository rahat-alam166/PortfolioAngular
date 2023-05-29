import { Component, Output, EventEmitter } from '@angular/core';
import { Project } from '../Projects';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent {
  @Output() onAddProject: EventEmitter<Project> = new EventEmitter();
  text: string;
  start: string;
  end: string;
  onSubmit()
  {
    const newProject = 
    {
      text: this.text,
      start: this.start,
      end: this.end
    }
    this.onAddProject.emit(newProject);

    this.text = "";
    this.start = "";
    this.end = "";
  }

}
