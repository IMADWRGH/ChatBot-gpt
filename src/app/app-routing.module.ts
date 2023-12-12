import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GptComponent } from './gpt/gpt.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
  },
  {
    path: 'gpt', component: GptComponent,
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
