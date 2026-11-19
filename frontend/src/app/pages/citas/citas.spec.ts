import { TestBed } from '@angular/core/testing';
import { CitasComponent } from './citas';

describe('CitasComponent',()=>{
  it('crea componente',()=>{
    const fixture = TestBed.createComponent(CitasComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
