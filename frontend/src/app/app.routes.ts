import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard';
import { LoginComponent } from './pages/login/login';
import { RegisterComponent } from './pages/register/register';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { CitasComponent } from './pages/citas/citas';
import { IntegrantesComponent } from './pages/integrantes/integrantes';
import { TutorComponent } from './pages/tutor/tutor';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard';
import { AdminServiciosComponent } from './pages/admin/admin-servicios/admin-servicios';
import { AdminUsuariosComponent } from './pages/admin/admin-usuarios/admin-usuarios';
import { AdminReportesComponent } from './pages/admin/admin-reportes/admin-reportes';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate:[authGuard] },
  { path: 'citas', component: CitasComponent, canActivate:[authGuard] },
  { path: 'integrantes', component: IntegrantesComponent, canActivate:[authGuard] },
  { path: 'tutor', component: TutorComponent, canActivate:[authGuard] },
  { path: 'admin-dashboard', component: AdminDashboardComponent, canActivate:[authGuard] },
  { path: 'admin-servicios', component: AdminServiciosComponent, canActivate:[authGuard] },
  { path: 'admin-usuarios', component: AdminUsuariosComponent, canActivate:[authGuard] },
  { path: 'admin-reportes', component: AdminReportesComponent, canActivate:[authGuard] }
];
