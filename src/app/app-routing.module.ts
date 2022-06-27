import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { LookComponent } from './components/look/look.component';

const routes: Routes = [
  { path: 'look', component: LookComponent },
  { path: 'rooms/:roomId', component: ContentComponent },
  { path: '', redirectTo: '/look', pathMatch: 'full' }, // redirect to `first-component`
  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
