import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { WriteComponent } from './pages/write/write.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m =>
      m.DashboardModule)
  },
  {
    path: 'write',
    loadChildren: () => import('./pages/write/wirte.module').then(m =>
      m.WirteModule)
  },
  {
    path: 'user',
    loadChildren:() => import('./pages/user/user.module').then(m =>
      m.UserModule)
  },
  {
    path:'user/adduser',
    loadChildren:() => import('./components/add-user/add-user.module').then(m =>
      m.AddUserModule)
  },
  {
    path:'user/:id',
    loadChildren:() => import('./components/edit-user/edit-user.module').then(m =>
      m.EditUserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
