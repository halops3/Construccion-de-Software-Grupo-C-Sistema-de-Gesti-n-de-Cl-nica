import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({selector:'app-sidebar-admin',standalone:true,imports:[RouterLink],templateUrl:'./sidebar-admin.html',styleUrl:'./sidebar-admin.css'})
export class SidebarAdminComponent{ salir(){localStorage.removeItem('user');} }
