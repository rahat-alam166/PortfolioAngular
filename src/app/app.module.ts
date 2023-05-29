import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './button/button.component';
import { ProjectHeaderComponent } from './project-header/project-header.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectItemComponent } from './project-item/project-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddProjectComponent } from './add-project/add-project.component';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './card/card.component';
import { CardSkillsComponent } from './card-skills/card-skills.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    ProjectHeaderComponent,
    ProjectsComponent,
    ProjectItemComponent,
    AddProjectComponent,
    CardComponent,
    CardSkillsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
