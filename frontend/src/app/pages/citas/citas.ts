import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import Swal from 'sweetalert2';
import { SidebarComponent } from '../../shared/sidebar/sidebar';
import { ApiService } from '../../core/services/api.service';

@Component({selector:'app-citas',standalone:true,imports:[FormsModule,NgFor,SidebarComponent],templateUrl:'./citas.html',styleUrl:'./citas.css'})
export class CitasComponent implements OnInit {
  citas:any[]=[]; servicios:any[]=[]; form:any={usuario_id:'',servicio_id:'',fecha:'',hora:''};
  constructor(private api:ApiService){}
  ngOnInit(): void { const u=JSON.parse(localStorage.getItem('user')||'{}'); this.form.usuario_id=u.usuario_id||''; this.cargar(); }
  cargar(){ this.api.getCitas().subscribe((r:any)=>this.citas=Array.isArray(r)?r:[]); this.api.getServicios().subscribe((r:any)=>this.servicios=Array.isArray(r)?r:[]); }
  crear(){ if(!this.form.servicio_id||!this.form.fecha||!this.form.hora){Swal.fire('Atención','Complete los datos','warning'); return;} this.api.crearCita(this.form).subscribe((r:any)=>{ if(r.error){Swal.fire('Error',r.error,'error'); return;} Swal.fire('Listo',r.mensaje,'success'); this.form.servicio_id=''; this.form.fecha=''; this.form.hora=''; this.cargar(); }); }
  cancelar(id:number){ this.api.cancelarCita({cita_id:id}).subscribe((r:any)=>{ Swal.fire('Actualizado',r.mensaje,'success'); this.cargar(); }); }
}
