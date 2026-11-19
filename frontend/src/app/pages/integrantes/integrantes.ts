import { Component } from '@angular/core';
import { SidebarComponent } from '../../shared/sidebar/sidebar';
import { NgFor } from '@angular/common';
@Component({selector:'app-integrantes',standalone:true,imports:[SidebarComponent,NgFor],templateUrl:'./integrantes.html',styleUrl:'./integrantes.css'})
export class IntegrantesComponent { integrantes=['<NOMBRE DEL ESTUDIANTE 1>','<NOMBRE DEL ESTUDIANTE 2>','<NOMBRE DEL ESTUDIANTE 3>']; }
