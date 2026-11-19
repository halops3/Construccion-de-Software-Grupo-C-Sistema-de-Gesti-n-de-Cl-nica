import { TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard';

describe('DashboardComponent',()=>{
  it('crea componente',()=>{
    const fixture = TestBed.createComponent(DashboardComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
