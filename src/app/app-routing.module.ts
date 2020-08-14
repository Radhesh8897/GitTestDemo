import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GitUserComponent } from 'src/app/git-user/git-user.component';


const routes: Routes = [
  { path: 'gitUser', component: GitUserComponent },
  { path: '', redirectTo: '/gitUser', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
