import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoalthreeComponent } from './goalthree/goalthree.component';
import { GoaltwoComponent } from './goaltwo/goaltwo.component';
import { GoaloneComponent } from "./goalone/goalone.component";


const routes: Routes = [
  { path: 'goalone', component: GoaloneComponent },
  { path: 'goaltwo', component: GoaltwoComponent },
  { path: 'goalthree', component: GoalthreeComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
