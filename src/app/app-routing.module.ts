import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { CardSkillsComponent } from './card-skills/card-skills.component';

const routes: Routes = [
  {path: 'card', component: CardComponent},
  {path: 'card-skills', component: CardSkillsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
