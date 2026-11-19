import { Component } from '@angular/core';
import { SidebarAdminComponent } from '../../../shared/sidebar-admin/sidebar-admin';
@Component({selector:'app-admin-reportes',standalone:true,imports:[SidebarAdminComponent],templateUrl:'./admin-reportes.html',styleUrl:'./admin-reportes.css'})
export class AdminReportesComponent { generar(){ alert('Módulo de reportes en construcción para el siguiente avance.'); } }
