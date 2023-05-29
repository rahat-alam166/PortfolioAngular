import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-header',
  templateUrl: './project-header.component.html',
  styleUrls: ['./project-header.component.css']
})
export class ProjectHeaderComponent implements OnInit{
  title : String = "Past Works";
  toggleAddProject()
  {
    console.log("init");
  }
  ngOnInit(): void {

  }
}
