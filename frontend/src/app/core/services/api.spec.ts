import { TestBed } from '@angular/core/testing';
import { Api } from './api';
describe('Api',()=>{it('crea',()=>{TestBed.configureTestingModule({});expect(TestBed.inject(Api)).toBeTruthy();});});
