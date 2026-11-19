import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn:'root'})
export class ApiService {
  private API='http://localhost/sistema_clinica/backend/public/?url=';
  constructor(private http:HttpClient){}
  login(data:any){return this.http.post(this.API+'login',data);}
  register(data:any){return this.http.post(this.API+'register',data);}
  getCitas(){return this.http.get(this.API+'citas');}
  crearCita(data:any){return this.http.post(this.API+'citas',data);}
  cancelarCita(data:any){return this.http.post(this.API+'cancelar-cita',data);}
  getServicios(){return this.http.get(this.API+'servicios');}
  crearServicio(data:FormData){return this.http.post(this.API+'servicios/create',data);}
  eliminarServicio(id:number){return this.http.post(this.API+'servicios/delete',{servicio_id:id});}
  obtenerDashboard(){return this.http.get(this.API+'dashboard/stats');}
  getUsuarios(){return this.http.get(this.API+'usuarios');}
  eliminarUsuario(id:number){return this.http.post(this.API+'eliminar-usuario',{usuario_id:id});}
}
