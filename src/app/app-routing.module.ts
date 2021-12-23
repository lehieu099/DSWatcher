import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then(m =>
      m.LoginModule)
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
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
        loadChildren: () => import('./pages/user/user.module').then(m =>
          m.UserModule)
      },
      {
        path: 'user/adduser',
        loadChildren: () => import('./components/add-user/add-user.module').then(m =>
          m.AddUserModule)
      },
      {
        path: 'user/:id',
        loadChildren: () => import('./components/edit-user/edit-user.module').then(m =>
          m.EditUserModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
