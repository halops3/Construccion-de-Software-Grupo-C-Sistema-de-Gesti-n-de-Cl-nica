import { TestBed } from '@angular/core/testing';
import { LoginComponent } from './login';

describe('LoginComponent',()=>{
  it('crea componente',()=>{
    const fixture = TestBed.createComponent(LoginComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
