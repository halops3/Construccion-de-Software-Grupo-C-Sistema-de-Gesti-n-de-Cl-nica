import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { ApiService } from '../../core/services/api.service';

@Component({selector:'app-register',standalone:true,imports:[FormsModule,RouterLink],templateUrl:'./register.html',styleUrl:'./register.css'})
export class RegisterComponent {
  form={nombre:'',email:'',password:''};
  constructor(private api:ApiService, private router:Router){}
  registrar(){
    if(!this.form.nombre||!this.form.email||!this.form.password){ Swal.fire('Datos incompletos','Complete todos los campos','warning'); return; }
    this.api.register(this.form).subscribe((r:any)=>{ if(r.error){Swal.fire('Error',r.error,'error'); return;} Swal.fire('Cuenta creada',r.mensaje,'success'); this.router.navigateByUrl('/'); });
  }
}
