import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Project } from './Projects';
import {PROJECTS} from './mock-projects';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {
  private apiUrl = "http://localhost:5000/projects"

  constructor(private http:HttpClient) { }
  getProjects(): Observable<Project[]> 
  {
    return this.http.get<Project[]>(this.apiUrl);
  }
  
  addProject(project: Project):Observable<Project>
  {
    return this.http.post<Project>(this.apiUrl, project, httpOptions);
  }
}
