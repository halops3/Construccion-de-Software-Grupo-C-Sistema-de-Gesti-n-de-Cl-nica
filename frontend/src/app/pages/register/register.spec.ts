import { TestBed } from '@angular/core/testing';
import { RegisterComponent } from './register';

describe('RegisterComponent',()=>{
  it('crea componente',()=>{
    const fixture = TestBed.createComponent(RegisterComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
