import { Component, OnInit } from '@angular/core';
import { SidebarAdminComponent } from '../../../shared/sidebar-admin/sidebar-admin';
import { ApiService } from '../../../core/services/api.service';
@Component({selector:'app-admin-dashboard',standalone:true,imports:[SidebarAdminComponent],templateUrl:'./admin-dashboard.html',styleUrl:'./admin-dashboard.css'})
export class AdminDashboardComponent implements OnInit { totalCitas=0; totalUsuarios=0; totalServicios=0; constructor(private api:ApiService){} ngOnInit(): void { this.api.obtenerDashboard().subscribe((r:any)=>{this.totalCitas=r.citas||0; this.totalUsuarios=r.usuarios||0; this.totalServicios=r.servicios||0;}); } }
