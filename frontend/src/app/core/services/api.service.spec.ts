import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
describe('ApiService',()=>{it('crea',()=>{TestBed.configureTestingModule({providers:[provideHttpClient()]});expect(TestBed.inject(ApiService)).toBeTruthy();});});
