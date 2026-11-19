import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import Swal from 'sweetalert2';
import { SidebarAdminComponent } from '../../../shared/sidebar-admin/sidebar-admin';
import { ApiService } from '../../../core/services/api.service';

@Component({selector:'app-admin-servicios',standalone:true,imports:[FormsModule,NgFor,SidebarAdminComponent],templateUrl:'./admin-servicios.html',styleUrl:'./admin-servicios.css'})
export class AdminServiciosComponent implements OnInit {
  servicios:any[]=[];
  form:any={nombre:'',descripcion:'',duracion:0,precio:0,imagen:null as File|null};
  constructor(private api:ApiService){}
  ngOnInit(): void { this.cargar(); }
  cargar(){ this.api.getServicios().subscribe((r:any)=>this.servicios=Array.isArray(r)?r:[]); }
  seleccionarImagen(e:any){ const f=e.target.files?.[0]; if(f) this.form.imagen=f; }
  crear(){
    if(!this.form.nombre||!this.form.duracion||!this.form.precio){Swal.fire('Datos incompletos','Revise el formulario','warning');return;}
    const fd=new FormData(); fd.append('nombre',this.form.nombre); fd.append('descripcion',this.form.descripcion); fd.append('duracion',String(this.form.duracion)); fd.append('precio',String(this.form.precio));
    if(this.form.imagen){fd.append('imagen',this.form.imagen);}
    this.api.crearServicio(fd).subscribe(()=>{Swal.fire('Guardado','Servicio creado','success'); this.form={nombre:'',descripcion:'',duracion:0,precio:0,imagen:null}; this.cargar();});
  }
  eliminar(id:number){ this.api.eliminarServicio(id).subscribe(()=>{Swal.fire('Eliminado','Servicio retirado','success'); this.cargar();}); }
}
