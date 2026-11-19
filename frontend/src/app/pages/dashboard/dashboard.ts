import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../../shared/sidebar/sidebar';
import { ApiService } from '../../core/services/api.service';
@Component({selector:'app-dashboard',standalone:true,imports:[SidebarComponent],templateUrl:'./dashboard.html',styleUrl:'./dashboard.css'})
export class DashboardComponent implements OnInit { user:any=JSON.parse(localStorage.getItem('user')||'{}'); totalCitas=0; totalServicios=0; constructor(private api:ApiService){} ngOnInit(): void { this.api.obtenerDashboard().subscribe((r:any)=>{ this.totalCitas=r.citas||0; this.totalServicios=r.servicios||0; }); } }
