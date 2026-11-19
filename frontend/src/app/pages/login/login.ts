import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { ApiService } from '../../core/services/api.service';

@Component({selector:'app-login',standalone:true,imports:[FormsModule,RouterLink],templateUrl:'./login.html',styleUrl:'./login.css'})
export class LoginComponent {
  form={email:'',password:''};
  constructor(private api:ApiService, private router:Router){}
  ingresar(){
    if(!this.form.email||!this.form.password){ Swal.fire('Campos requeridos','Ingrese correo y contraseña','warning'); return; }
    this.api.login(this.form).subscribe((r:any)=>{
      if(r.error){ Swal.fire('Acceso denegado',r.error,'error'); return; }
      localStorage.setItem('user', JSON.stringify(r));
      this.router.navigateByUrl(r.rol_id===1?'/admin-dashboard':'/dashboard');
    });
  }
}
