import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import Swal from 'sweetalert2';
import { SidebarAdminComponent } from '../../../shared/sidebar-admin/sidebar-admin';
import { ApiService } from '../../../core/services/api.service';

@Component({selector:'app-admin-usuarios',standalone:true,imports:[NgFor,SidebarAdminComponent],templateUrl:'./admin-usuarios.html',styleUrl:'./admin-usuarios.css'})
export class AdminUsuariosComponent implements OnInit {
  usuarios:any[]=[];
  constructor(private api:ApiService){}
  ngOnInit(): void { this.cargar(); }
  cargar(){ this.api.getUsuarios().subscribe((r:any)=>this.usuarios=Array.isArray(r)?r:[]); }
  estado(fecha:string): string {
    if(!fecha) return 'Sin actividad';
    const ms = new Date().getTime() - new Date(fecha).getTime();
    const min = Math.floor(ms/60000);
    if(min<1) return 'Activo ahora';
    if(min<60) return 'Activo hace '+min+' min';
    return 'Activo hace '+Math.floor(min/60)+' h';
  }
  eliminar(id:number){ this.api.eliminarUsuario(id).subscribe(()=>{Swal.fire('Listo','Usuario eliminado','success'); this.cargar();}); }
}
