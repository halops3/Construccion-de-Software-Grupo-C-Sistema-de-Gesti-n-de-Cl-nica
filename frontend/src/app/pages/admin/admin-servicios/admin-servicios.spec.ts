import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { AdminServiciosComponent } from './admin-servicios';
describe('AdminServicios',()=>{it('crea',()=>{TestBed.configureTestingModule({providers:[provideHttpClient()]});const f=TestBed.createComponent(AdminServiciosComponent);expect(f.componentInstance).toBeTruthy();});});
